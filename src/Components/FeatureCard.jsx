
import { abilities } from "../Constants"

const FeatureCard = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className="card-border rounded-xl flex flex-col gap-4 p-8">
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeatureCard
