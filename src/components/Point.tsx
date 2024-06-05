import { PointType } from "../types"

const Point: React.FC<{ point: PointType }> = ({ point }: { point: PointType }) => {
  return (
    <div className='point' style={{
      left: point.x + 'px', top: point.y + 'px'
    }}>
    </div>
  )
}

export default Point