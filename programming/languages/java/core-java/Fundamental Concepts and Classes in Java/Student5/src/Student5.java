public class Student5 {
	private long id;
	private String firstName;
	private String lastName;
	//What if we want to count the number of obj.s we have in memory? Let's define the var. below:
	private int count;//Initially 0

	//And then increment that var. in ALL ctrs we have in the class
	public Student5() {
		id = 1;
		firstName = "Reza";
		lastName = "Khojasteh";
		
		//Here...
		count++;//OR setCount(getCount() + 1);
	}

	public Student5(long id, String firstName, String lastName) {
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

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

}
