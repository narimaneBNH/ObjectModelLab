/* M2 MATIS SIRES */
/* Ce TP a été réalisé par: Narimane BENHELLAL*/

/* TODO : Créer le modèle objet ici */ 

export class Data {
	constructor() {
	}
}

export class SensorType{
	constructor(){
		this.types = ['Temperature', 'Humidity', 'Light', 'Switch', 'Door', 'FAN_SPEED'];
	}
	get type(){
		this.types = type;
	}
	set type(type){
		this.types = type;
	}
	if (typeof types === 'string' || types instanceof String){
		if (types = "Temperature"){
			return new Temperature(data);
		}
		if (types = "Humidity"){
			return new Humidity(data);
		}
		if (types = "Light"){
			return new Light(data);
		}
		if (types = "Switch"){
			return new Door(data);
		}
		if (types = "FAN_SPEED"){
			return new FAN_SPEED(data);
		}
		if (types = "Door"){
			return new Door(data);
		}
	}
}

export class Sensor {
	constructor(id, name, data){
		this.identifiant = id;
 		this.nom = name;
 		this.donnee = new Data(data);
		
		if(!Number.isInteger(data.id){
			throw "ID doit être un nombre entier";
		}
		this.types = new SensorType();
	}
	get id(){
		return this.identifiant || 0;
	}
	set id(iD){
		this.identifiant = iD;
	}
	
	get name(){
     		return this.nom || 0; 
   	}
   	set name(name){
    		this.nom = name;
   	}		
	
	get data() {
        	return this.donnee;
    	}
    	set data(data) {
        	this.donnee = data;
    	}
	
	get type(){
		return this.typeSensor || 0;
	}
	set type(t){
		this.typeSensor = t;
	}
}


export class TimeSeries extends Data{
	constructor(value, label){
		super();
		this.values = value;
		this.labels = label;
	}
	get value(){
		return this.values;
	}
	set value(val){
		this.values = val;
    	}
	
    	get label() {
        	return this.labels;
    	}
	set label(lab) {
        	this.labels = lab;
   	 }
	
    	getCountVal(){
		return this.values.length;
	}
	
	getLabel(){
		var l = new Date("0"); //définir la dernière date
		for(let i in this.values){
			var date = new Date(this.labels[i]);
			if(date.getTime() > l.getTime()){
				l = date;
			}
		}
		return l;
	}
	
	getValue(){
		var l = new Date("0"); //définir la dernière date 
		var v = 0; //définir la dernière valeur
		for(let i in this.values){
			var date = new Date(this.labels[i]);
			if(date.getTime() > l.getTime()){
				l = date;
				v = this.values[i];
			}
		}
		return v;
	}
	
	getMoy(){
		var som = 0;
		for(let i in this.values){
			som += this.values[i];
		}
		let resultat = som / this.getCountVal();
		resultat = resultat.toFixed(2);

        return resultat;
	}
}

export class Datum extends Data{
	constructor(value){
		super();
		this.valeur = value;
	}
	get value(){
		return this.valeur || 0;
	}
	set value(value){
		this.val = value;
	}
	dataOpen () {
		return this.valeur == 1;
	}
}


export class Temperature extends Sensor{
	constructor(id, name, types){
		super(id, name, types);
		this.donnee = new TimeSeries();
	}
}

export class Humidity extends Sensor{
	constructor(id, name, types){
		super(id, name, types);
	}
}

export class Light extends Sensor{
	constructor(id, name, types){
		super(id, name, types);
	}
}


export class Door extends Sensor{
	constructor(id, name, types){
		super(id, name, types);
		this.donnee = new Datum();
	}
}

export class FAN_SPEED extends Sensor{
	constructor(id, name, types){
		super(id, name, types);
		this.donnee = new TimeSeries();
	}
} 


