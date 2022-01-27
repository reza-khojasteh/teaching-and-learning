
public class Student1Tester {//has package access to Student1 because they are in the same folder!

	public static void main(String[] args) {
		
		//This class not only has access to class Student1 and could make an obj. ...
		Student1 student1 = new Student1();
		
		//but also has access to its fields/properties and could set the state of the obj., or get it which is almost always not desirable!
		student1.id = 10;
		System.out.println(student1.id);
	}

}
