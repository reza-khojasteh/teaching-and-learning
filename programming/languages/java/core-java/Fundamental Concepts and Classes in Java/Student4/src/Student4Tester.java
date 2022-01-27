public class Student4Tester {//has package access to Student4 because they are in the same folder!

	public static void printInfo(Student4 student) {
		System.out.println("ID: " + student.getId());//Again, not student.id!
		System.out.println("First Name: " + student.getFirstName());
		System.out.println("Last Name: " + student.getLastName());
	}
	
	public static void main(String[] args) {
		
		//This class has access to class Student4 and could create obj.s ...
		Student4 student1 = new Student4();
		Student4 student2 = new Student4(2, "John", "White");
		Student4 student3 = new Student4(student1);
		Student4 student4 = new Student4(4);
		
		System.out.println("student1's info: ");
		printInfo(student1);
		
		System.out.println("\nstudent2's info: ");
		printInfo(student2);
		
		System.out.println("\nstudent3's info: ");
		printInfo(student3);
		
		System.out.println("\nstudent4's info: ");
		printInfo(student4);
		
		student3.setStudent(3, "James", "Brown");
		System.out.println("\nstudent3's info this time: ");
		printInfo(student3);
		
		System.out.println("\nstudent4's info again: ");
		printInfo(student4.getStudent());
	}

}
