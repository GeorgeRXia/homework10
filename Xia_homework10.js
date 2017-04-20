
//1.

function Multiplier(){
	this.numberSupplied;
	this.multiply = mulitply;
	this.getCurrentValue = getCurrentValue;
	this.holderValue = 1;
	this.lastValue; // just in case you want to use getCurrentValue without using multiply first.

}

function mulitply (numberSupplied){
	this.numberSupplied = numberSupplied;
	this.holderValue *= this.numberSupplied;
	this.lastValue = this.holderValue

	return this.lastValue;

}

function getCurrentValue(){
	return this.lastValue;

}

//2.

function Album(photoFileName, location, photo){
	this.photoInfo = [photoFileName, location, photo];
	this.photos = { photoStoring: [] }

	this.photos.photoStoring.push(this.photoInfo);

	this.addToAlbum = addToAlbum;
	this.accessPhotosByOrder = accessPhotosByOrder;
}

function addToAlbum(photoFileName, location, photo){
	this.photoInfo = [photoFileName, location, photo];
	
	this.photos.photoStoring.push(this.photoInfo);

}

function accessPhotosByOrder(number){
	var indexNumber = number - 1;
	return this.photos.photoStoring[indexNumber];

}
var sceneray = new Album("makeout", "beach scene", "help");


//3 

function Person(name, age){
	this.name = name;
	this.age = age;

}

function Student() {
	Person.apply(this, arguments);
	this.isAStudent = true;

	
	this.detention;
	this.sentToPrincipal;

	this.grade = grade;
	this.homeWorkDone = homeWorkDone;
	this.skipClass = skipClass;
	this.appleToTeacher = appleToTeacher;

}

function grade(grade) {
	this.grade = grade;

}

function homeWorkDone(status) {
	this.homeWorkDone = status;

	return status;

}

function skipClass(status) {
	this.skipClass = status;
	
	return status;

}

function appleToTeacher(teacher, status){
	this.appleToTeacher = status;

	teacher.apple = status;

	return status;

}

function Teacher(){
	Person.apply(this, arguments);
	this.isAStudent = false;
	this.apple;

	this.ChangeGrades = changeGrades;
	this.sendToPrincipal = sendToPrincipal;
	this.giveDetention = giveDetention;

}

function changeGrades(student, grade){
	student.grade = grade;

}

function sendToPrincipal(student){
	student.sentToPrincipal = true;

}

function giveDetention(student){
	student.detention = true;

}

function School (person){
	if(person.isAStudent === false){

		this.currentTeachers= [];

		this.currentTeachers.push(person);

	}else {

		this.student = new Array();

		this.student.push(person);

	}
	
	this.addPersonToSchool = addPersonToSchool;
	
	this.schoolStatus;
	this.schoolClosedOrOpen = schoolClosedOrOpen;

	this.getInfo = getInfo;
	

}

function addPersonToSchool(person){
	if(person.isAStudent === false){

		this.currentTeachers = [];

		this.currentTeachers.push(person);

	}else {

		this.student = new Array();

		this.student.push(person);

	}

}

function schoolClosedOrOpen(closedOrOpen){
	this.schoolStatus = closedOrOpen;

}

function getInfo(person){
	if(person.isAStudent === false){
		var indexInfo = this.currentTeachers.indexOf(person);
		

		return this.currentTeachers[indexInfo];

	}else{
		var indexInfo = this.student.indexOf(person);
		
		return this.student[indexInfo];
	}

}

var josh = new Student("Josh",15);
var ethan = new Student("Ethan", 27)
var chris = new Teacher("Chris", 28);
var bayard = new School(chris);
chris.giveDetention(josh);


//extra 2


