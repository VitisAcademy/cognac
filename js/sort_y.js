const sort_y = document.querySelector('.y__movebox');

function sortYMove(){
    /**
     * Присваивает draggie каждому элементу.
     */
    for (let item of sort_y.children){
        let draggie = new Draggabilly(item, { axis: 'y', containment: true, grid: [ 10, 10 ] });
        let draggie_y = draggie.position.y;
        // включает постоянное наблюдение для перемещения элемента
        draggie.on( 'pointerUp', function(){
            if (draggie.position.y <= 20){
                draggie.setPosition(0, draggie_y);
                let temp = draggie.element.textContent;
                draggie.element.textContent = sort_y.children[0].textContent;
                sort_y.children[0].textContent = temp;
            }
            else if (draggie.position.y <= 80){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[1].textContent;
                sort_y.children[1].textContent = temp;
            }
            else if (draggie.position.y <= 140){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[2].textContent;
                sort_y.children[2].textContent = temp;
            }
            else if (draggie.position.y <= 200){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[3].textContent;
                sort_y.children[3].textContent = temp;
            }
            else if (draggie.position.y <= 260){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[4].textContent;
                sort_y.children[4].textContent = temp;
            }
            else if (draggie.position.y <= 320){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[5].textContent;
                sort_y.children[5].textContent = temp;
            }
            else if (draggie.position.y <= 380){
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[6].textContent;
                sort_y.children[6].textContent = temp;
            }
            else {
                let temp = draggie.element.textContent;
                draggie.setPosition(0, draggie_y);
                draggie.element.textContent = sort_y.children[7].textContent;
                sort_y.children[7].textContent = temp;
            }
        });
    }
}

function sortYScore(){
    for (let i=0; i<contentSortY.length; i++){
        if (sort_y.children[i].textContent == contentSortY[i]) {
            userSortY += 1;
            sort_y.children[i].style.border = '2px solid green'
        } else {
            sort_y.children[i].style.border = '2px solid red'
        }
    }
}

sortYMove();
