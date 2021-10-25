function mapGen (startX, startY, itemsX, itemsY, image, height, width, entity) {

   for (let columns = 0; columns < itemsX; columns++) {

       for (let rows = 0; rows < itemsY; rows++) {

           let x = startX + width * columns;
           let y = startY + height * rows;

           entity.create(x, y, image)
       }
       
   }
}