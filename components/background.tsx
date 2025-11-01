export const Background = ({ src }: { src: string }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}