'use client';
import Image from 'next/image';

const IslandSnowLogo = () => (
  <div className="logo-section">
    <Image
      src="/islandsnow-logo.png"
      alt="Island Snow Logo"
      width={300}  // adjust as needed
      height={100} // adjust as needed
    />
  </div>
);

export default IslandSnowLogo;