export default function (part) {
  const { options, Point, Path, points, paths, Snippet, snippets, complete, sa, paperless, macro } =
    part.shorthand()


    //pocket seams here 
  let pocketLength = 800 * options.length
  let pocketWidth = 500 * options.width

  points.topLeft = new Point(0, 0)
  points.topRight = new Point(pocketWidth, 0)
  points.bottomLeft = new Point(0, pocketLength)
  points.bottomRight = new Point(pocketWidth, pocketLength)

  //center point
  points.center = new Point(pocketWidth / 2, 0)

  //slit end 
 points.middle = new Point(pocketWidth / 2, pocketLength / 2)
 

 paths.slit = new Path()
  .move(points.center)
  .line(points.middle)
  .line(points.center)
  .close()
  .attr("class", "various dashed")

  
 


  paths.seam = new Path()
    .move(points.topLeft)
    .line(points.bottomLeft)
    .line(points.bottomRight)
    .line(points.topRight)
    .line(points.topLeft)
    .close()
    .attr('class', 'fabric')

  // Complete?
  if (complete) {
    points.logo = points.topLeft.shiftFractionTowards(points.bottomRight, 0.7)
    snippets.logo = new Snippet('logo', points.logo)
    points.text = points.logo
      .shift(-90, pocketWidth / 2)
      .attr('data-text', 'hello')
      .attr('data-text-class', 'center')

    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
    macro('hd', {
      from: points.bottomLeft,
      to: points.bottomRight,
      y: points.bottomLeft.y + sa + 15,
    })
    macro('vd', {
      from: points.bottomRight,
      to: points.topRight,
      x: points.topRight.x + sa + 15,
    })
  }

  return part
}
