import "./articles.page.scss";

import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Article3DModel() {
  const material = useTexture({
    map: "/textures/earth.jpg",
    displacementMap: "/textures/earthbump_new.jpg",
    bumpMap: "/textures/earthbump_new.jpg"
  });

  const cloudMaterial = useTexture({
    map: "/textures/earthCloud.png"
  });

  return (
    <mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 48, 48]} />
        <meshPhongMaterial bumpScale={20} displacementScale={20} roughness={0.5} {...material} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.52, 32, 32]} />
        <meshPhongMaterial {...cloudMaterial} transparent={true} />
      </mesh>
      <ambientLight intensity={2} />
      {/*<pointLight position={[2.5, 2.5, 2.5]} intensity={20} />*/}
      <OrbitControls autoRotateSpeed={2} autoRotate={true} enablePan={false} enableZoom={false} />
      {/*<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0} />*/}
    </mesh>
  );
}

function Article() {
  return (
    <div className="article">
      <div className="article-3d-model">
        <Canvas>
          <Article3DModel />
        </Canvas>
      </div>
      <div className="article-info">
        <span className="article-title">Earth</span>
        <span className="article-description">
          Earth 🌍 is the third planet from the Sun ☀️, boasting an equatorial circumference of about 40,075 km (24,901 miles). 🌏
          <br />
          71% of Earth&apos;s surface is covered in water 🌊, with 29% being land. 🏞️
          <br />
          The atmosphere is primarily made up of nitrogen (about 78%) and oxygen (about 21%). 🌬️
          <br />
          Earth&apos;s magnetic field 🧲 protects it from harmful solar radiation.
          <br />
          The planet rotates every 23 hours, 56 minutes, and 4 seconds, causing day and night. 🌞🌝
          <br />
          Earth&apos;s gravity is approximately 9.8 m/s², keeping us grounded. ⚖️
          <br />
          With over 7.9 billion people 🌎, human activities impact the environment and climate 🌱🌡️.
          <br />
          Preserving Earth&apos;s future is crucial, from reducing carbon emissions 🌿 to protecting biodiversity 🐾. 🌏💚
        </span>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <>
      <div className="articles">
        <section className="section">
          <div className="section-container">
            <span className="section-title">Space tour</span>
            <div className="articles">
              <Article />
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Articles;
