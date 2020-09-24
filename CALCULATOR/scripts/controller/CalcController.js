class CalcController {

	 constructor() {

	 	this._locale = 'pt-BR';
		this._displayCalcEl = document.querySelector('#display');
		this._dateEl = document.querySelector('#data');
		this._timeEl = document.querySelector('#hora');
		this._currentDate;
		this.initialize();
		this.initButtonsEvents();

	}

	initialize() {

		this.setDisplayDateTime();


		setInterval(()=>{

			this.setDisplayDateTime();

		}, 1000);

	}

	addEventListenerAll(element, events, fn) {

		events.split(' ').forEach(event => {

			element.addEventListener(event, fn, false);

		});

	}

	initButtonsEvents() {

		let buttons = document.querySelectorAll('#buttons > g, #parts > g');

		buttons.forEach((btn, index)=>{

			this.addEventListenerAll(btn, 'click drag', e=>{

				console.log(btn.className.baseVal.replace("btn-",""));

			});

			this.addEventListenerAll(btn, "mouseover mouseup mousedow", e => {

				btn.style.cursor = "pointer";
				
			});

		});

	}

	setDisplayDateTime() {
		
		this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
		this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
			day: "2-digit",
			month: "long",
			year: "numeric"
		});

	}

	get displayTime() {

		return this._timeEl.innerHTML;
	}

	get displayDate() {

		return this._dateEl.innerHTML;
	}

	get displayCalc() {

		return this._displayCalcEl.innerHTML;
		
	}

	get currentDate() {

		return new Date();
	}

	set displayTime(value) {

		this._timeEl.innerHTML = value;
		
	}

	set displayDate(value) {

		this._dateEl.innerHTML = value;
		
	}

	set displayCalc(value) {

		this._displayCalcEl.innerHTML = value;
		
	}

}