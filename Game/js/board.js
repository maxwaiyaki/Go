// Create a board object which keeps track of board information and 
// has methods which draw (and perhaps redraw) the board based on other 
// information stored in the object 
// requires the preexistance of a board tag on whichever page usesthis object

var Board = {};
// member variables
Board.board_length = 600;
Board.number_of_units = 19;
Board.unit_length = Math.round(Board.board_length / (Board.number_of_units + 1));
Board.piece_length = (Board.board_length / Board.number_of_units);
Board.game_length = (Board.unit_length * Board.number_of_units);
Board.margin = Math.round((Board.board_length - Board.game_length) / 2.0);
Board.piece_number_placed = 0;	// increment as each piece is placed
Board.current_color = 0; // 0 for black 1 for white, toggle between the two