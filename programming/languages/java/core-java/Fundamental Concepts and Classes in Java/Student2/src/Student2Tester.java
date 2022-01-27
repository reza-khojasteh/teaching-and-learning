
public class Student2Tester {//has package access to Student2 because they are in the same folder!

	public static void main(String[] args) {
		
		//This class has access to class Student2 and could create an obj. ...
		Student2 student1 = new Student2();
		
		//but this time it doesn't have direct access to its fields/properties which is almost always desirable!
		student1.id = 10;
		System.out.println(student1.id);
	}

}
