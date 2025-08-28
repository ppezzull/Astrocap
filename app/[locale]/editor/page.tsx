"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"

export default function EditorPage() {
	const mountRef = useRef<HTMLDivElement | null>(null)
	const modelRef = useRef<THREE.Object3D | null>(null)
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
	const controlsRef = useRef<any | null>(null)
	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
	const [capColor, setCapColor] = useState("#ffffff")
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!mountRef.current) return

		const width = mountRef.current.clientWidth
	const height = 540 // fixed height for now; keep responsive width

		const scene = new THREE.Scene()
		scene.background = new THREE.Color(0x000000)

	const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
	// Start farther to avoid being too close
	// Increased Z to frame the model more fully on load
	camera.position.set(0, 2, 25)
		cameraRef.current = camera

		const renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
		renderer.setSize(width, height)
		mountRef.current.appendChild(renderer.domElement)
		rendererRef.current = renderer

		// Lighting
		const ambient = new THREE.AmbientLight(0xffffff, 0.7)
		const dir = new THREE.DirectionalLight(0xffffff, 0.9)
		dir.position.set(5, 8, 6)
		scene.add(ambient, dir)

		// Controls
		// Dynamic import OrbitControls to avoid build-time resolution issues
		let controls: any
		import("three-stdlib").then((m) => {
			const OrbitControls = m.OrbitControls
			controls = new OrbitControls(camera, renderer.domElement)
			controls.enableDamping = true
			controls.dampingFactor = 0.07
			controls.target.set(0, 1.25, 0)
			controlsRef.current = controls
		})

		// Ground subtle grid (optional)
		// const grid = new THREE.GridHelper(10, 10, 0x1f2937, 0x111827)
		// scene.add(grid)

		// Load model
		// Dynamic import GLTFLoader
		import("three-stdlib").then((m) => {
			const GLTFLoader = m.GLTFLoader
			const loader = new GLTFLoader()
			loader.load(
				"/snapback/scene.gltf",
				(gltf: { scene: THREE.Group }) => {
					const model = gltf.scene
					model.position.set(0, 0, 0)
					scene.add(model)
					modelRef.current = model

					// Apply initial color
					applyBaseColor(capColor)
					// Auto-frame the model: compute bounding box/sphere and place camera
					const frameModel = () => {
						const box = new THREE.Box3().setFromObject(model)
						const center = box.getCenter(new THREE.Vector3())
						const sphere = box.getBoundingSphere(new THREE.Sphere())
						const radius = sphere.radius || box.getSize(new THREE.Vector3()).length() / 2

						// desired view angles
						const azimuthDeg = -30 // rotate slightly to the left
						const elevationDeg = 60 // above the model
						const az = THREE.MathUtils.degToRad(azimuthDeg)
						const el = THREE.MathUtils.degToRad(elevationDeg)

						const distance = Math.max(radius * 2.5, 4)
						const x = distance * Math.sin(el) * Math.cos(az)
						const y = distance * Math.cos(el)
						const z = distance * Math.sin(el) * Math.sin(az)

						if (cameraRef.current) {
							cameraRef.current.position.set(center.x + x, center.y + y, center.z + z)
							cameraRef.current.lookAt(center)
							cameraRef.current.updateProjectionMatrix()
						}

						if (controlsRef.current) {
							controlsRef.current.target.copy(center)
							controlsRef.current.update()
						}
					}

					// If controls are ready, frame immediately; otherwise poll briefly until available
					if (controlsRef.current) {
						frameModel()
					} else {
						let tries = 0
						const interval = setInterval(() => {
							tries += 1
							if (controlsRef.current || tries > 10) {
								clearInterval(interval)
								frameModel()
							}
						}, 100)
					}

					setLoading(false)
				},
				undefined,
				(err: unknown) => {
					// eslint-disable-next-line no-console
					console.error("Failed to load GLTF:", err)
					setLoading(false)
				}
			)
		})

		const onResize = () => {
			if (!mountRef.current || !cameraRef.current || !rendererRef.current) return
			const w = mountRef.current.clientWidth
			const h = height
			cameraRef.current.aspect = w / h
			cameraRef.current.updateProjectionMatrix()
			rendererRef.current.setSize(w, h)
		}
		window.addEventListener("resize", onResize)

		let rafId = 0
		const animate = () => {
			rafId = requestAnimationFrame(animate)
			// Use ref to avoid calling update before controls are initialized
			controlsRef.current?.update?.()
			renderer.render(scene, camera)
		}
		animate()

		return () => {
			window.removeEventListener("resize", onResize)
			cancelAnimationFrame(rafId)
			// Dispose controls if they were created
			controlsRef.current?.dispose?.()
			renderer.dispose()
			if (mountRef.current && renderer.domElement.parentElement === mountRef.current) {
				mountRef.current.removeChild(renderer.domElement)
			}
			scene.traverse((obj: THREE.Object3D) => {
				if ((obj as THREE.Mesh).isMesh) {
					const mesh = obj as THREE.Mesh
					mesh.geometry?.dispose()
					// Don't dispose textures that are shared (GLTF textures) here to avoid errors
					const mat = mesh.material as THREE.Material | THREE.Material[]
					if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
					else mat?.dispose?.()
				}
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const applyBaseColor = (hex: string) => {
		const root = modelRef.current
		if (!root) return
		root.traverse((child: THREE.Object3D) => {
			const mesh = child as THREE.Mesh
			if (!mesh.isMesh) return
			const mat = mesh.material as any
			if (!mat) return
			// Clone before mutate to avoid affecting shared materials
			if (Array.isArray(mat)) {
				mesh.material = mat.map((m) => {
					const cloned = m.clone()
					if (cloned.color) cloned.color.set(hex)
					return cloned
				})
			} else {
				const cloned = mat.clone()
				if (cloned.color) cloned.color.set(hex)
				mesh.material = cloned
			}
		})
	}

	return (
		<div className="container mx-auto px-4 py-10 font-jakarta">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-wider font-jakarta">
				Customizer — Snapback
			</h1>
			<div className="rounded-2xl border border-blue-500/30 bg-black/50 backdrop-blur-sm p-3">
				<div className="relative">
					<div ref={mountRef} style={{ width: "100%", height: 540 }} />
					{loading && (
						<div className="absolute inset-0 grid place-items-center">
							<div className="flex flex-col items-center gap-3">
								<div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
								<p className="text-white/70 text-sm">Caricamento modello…</p>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="mt-6 flex items-center gap-3 bg-black/40 border border-blue-500/20 rounded-xl p-4">
				<label className="text-white/80 min-w-28">Colore Cap</label>
				<input
					type="color"
					value={capColor}
					onChange={(e) => {
						setCapColor(e.target.value)
						applyBaseColor(e.target.value)
					}}
					className="h-10 w-16 cursor-pointer rounded"
				/>
				<Button
					className="ml-auto"
						onClick={() => {
						setCapColor("#ffffff")
						applyBaseColor("#ffffff")
					}}
				>
					Reset
				</Button>
			</div>
		</div>
	)
}

