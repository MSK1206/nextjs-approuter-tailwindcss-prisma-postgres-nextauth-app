type RatingProps = {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  const maxRating = 5 // 最大評価の数
  const filledStars = Math.min(Math.max(rating, 1), maxRating) // 最小1、最大5の評価を設定

  // 評価を星で5段階で表示するための文字列を生成
  const stars = Array.from({ length: maxRating }, (_, index) => {
    if (index < filledStars) {
      return '★' // レーティングされた星
    } else {
      return '☆' // 空の星
    }
  }).join('')

  return (
    <div>
      <span className="text-yellow-300">{stars}</span>
    </div>
  )
}
