import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col sm:flex-row gap-8 mb-8 items-center">
      <Image
        src="/about-Image/my-icon.png"
        width={180}
        height={180}
        alt="my-icon"
        className="flex justify-center md:justify-start"
      />
      <div className="space-y-2">
        <h2 className="text-3xl font-medium">こんにちは、シグマです！</h2>
        <p className="text-lg">怠惰に過ごしていますが、</p>
        <p className="text-lg">プログラミングや読書などをしていて</p>
        <p className="text-lg">好奇心のままマイペースに学んでいます</p>
      </div>
    </section>
  );
}
