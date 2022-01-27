public class Student6 {
	private long id;
	private String firstName;
	private String lastName;
	//What if we want to count the number of obj.s we have in memory? Let's define the var. static this time!
	private static int count;//Initially 0

	//And then increment that var. in ALL ctrs we have in the class
	public Student6() {
		id = 1;
		firstName = "Reza";
		lastName = "Khojasteh";
		
		//Here...
		count++;//OR setCount(getCount() + 1);
	}

	public Student6(long id, String firstName, String lastName) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		
		//And here as well:
		count++;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	//And let's modify the methods that want to access the static var. to be static as well. Here:
	public static int getCount() {
		return count;//Even better to say "return Student6.count;"
	}

	//And also in here:
	public static void setCount(int count) {
		Student6.count = count;//We can't use "this" anymore in a static method like this!
	}

}
