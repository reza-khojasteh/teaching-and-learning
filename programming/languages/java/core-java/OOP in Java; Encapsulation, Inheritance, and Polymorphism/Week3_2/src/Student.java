//Override equals() and toString() methods (from class Object), whenever possible
public class Student {
	private long id;
	private String firstName;
	private String lastName;
	//setters and getters needed

	public Student(long id, String firstName, String lastName) {
		super();//it happens even if you don't say it!
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	@Override//pay attention to this annotation! It helps you prevent unwanted overloading instead of overriding!
	public String toString() {
		return String.format("This is %s %s with StID: %d", firstName, lastName, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		
		if (obj == null)
			return false;
		
		if (getClass() != obj.getClass())
			return false;
		
		Student other = (Student) obj;
		
		if (id != other.id)
			return false;
		
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		
		return true;
	}

	public static void main(String[] args) {
		Student student1 = new Student(1, "Reza", "Khojasteh");
		Student student2 = new Student(1, "Reza", "Khojasteh");
		
		System.out.println(student1 == student2);
		System.out.println(student1.equals(student2));
		
		System.out.println(student1.toString());//Try this line with/without overriding toString()
		System.out.println(student2);//Try this line with/without overriding toString()
	}

}