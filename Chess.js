'use strict';

const settings = {
    rowCount: 9,
    colCount: 9,
    backCellColor: 'black',
    emptyCellColor: '#eee',
};

const chess = {
	settings,
	containerElement: null,
	abcd: [],

	init () {
		this.containerElement = document.getElementById('chess');
		this.initCells();
	},

	initCells() {
		this.containerElement.innerHTML = '';
		this.abcd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

		for (let row = 0; row < this.settings.rowCount; row++) {
            var trElem = document.createElement('tr');
            if (row == 0){	
            }
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                if (col == 0 && row != 0){
                	cell.innerHTML = row;
                }
                else if (row == 0 && col != 0) {
                	cell.innerHTML = this.abcd[col - 1];
                }
                else {
	                if (col % 2 == 0 && row % 2 == 1 || col % 2 == 1 && row % 2 == 0){
	                	cell.style.backgroundColor = this.settings.backCellColor;
	                }
	            }
                trElem.appendChild(cell);
            }
        }
	}
};

chess.init();