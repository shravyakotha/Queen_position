/*
[
[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]
[1,0],[1,1],[1,2],[1,1],[1,4],[1,5],[1,6],[1,7]
[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7]
[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7]
[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7]
[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7]
[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]
[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7]
]

           N
           |
           |
           |
           |
 W---------.--------E
           |
           |
           |
           |
           S
*/

var queen = {
    direction: "s",
    position: {
        r: 0,
        c: 4
    }
}


var input = prompt("Enter queen's direction and steps like N3 SW5....")
if (input.length == 3) {
    var steps = Number(input.slice(2, ))
    var direction = input.slice(0, 2).toUpperCase();
} else if (input.length == 2) {
    var steps = Number(input.slice(1, ))
    var direction = input.slice(0, 1).toUpperCase()
} else {

    var input = prompt("Enter queen's direction and steps like N3 SW5....")

}


changeDirection(steps, direction)

function changeDirection(steps, direction) {
    switch (direction) {
        case 'S':
            temp = queen.position.r + steps;
            if (boundaryCheck(temp)) {
                queen.position.r = temp;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'E':
            temp = queen.position.c + steps;
            if (boundaryCheck(temp)) {
                queen.position.c = temp;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'W':
            temp = queen.position.c - steps;
            if (boundaryCheck(temp)) {
                queen.position.c = temp;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'N':
            temp = queen.position.r - steps;
            if (boundaryCheck(temp)) {
                queen.position.r = temp;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'SE':
            temp1 = queen.position.r - steps;
            temp2 = queen.position.c + steps;
            if (boundaryCheckrc(temp1, temp2)) {
                queen.position.r = temp1;
                queen.position.c = temp2;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'NE':
            temp1 = queen.position.r + steps;
            temp2 = queen.position.c + steps;
            if (boundaryCheckrc(temp1, temp2)) {
                queen.position.r = temp1;
                queen.position.c = temp2;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'SW':
            temp1 = queen.position.r - steps;
            temp2 = queen.position.c - steps;
            if (boundaryCheckrc(temp1, temp2)) {
                queen.position.r = temp1;
                queen.position.c = temp2;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;
        case 'NW':
            temp1 = queen.position.r + steps;
            temp2 = queen.position.c - steps;
            if (boundaryCheckrc(temp1, temp2)) {
                queen.position.r = temp1;
                queen.position.c = temp2;
                console.log("Now queen's position is " + queen.position.r, queen.position.c);
            } else {
                console.log("Crossing the boundary");
            }
            break;

    }

}

function boundaryCheck(row_p) {
    if (row_p == 0 || row_p == 1 || row_p == 2 || row_p == 3 || row_p == 4 || row_p == 5 || row_p == 6 || row_p == 7)
        return true;
    else
        return false;
}

function boundaryCheckrc(row_p, col_p) {
    if ((row_p == 0 || row_p == 1 || row_p == 2 || row_p == 3 || row_p == 4 || row_p == 5 || row_p == 6 || row_p == 7) &&
        col_p == 0 || col_p == 1 || col_p == 2 || col_p == 3 || col_p == 4 || col_p == 5 || col_p == 6 || col_p == 7)
        return true;
    else
        return false;
}