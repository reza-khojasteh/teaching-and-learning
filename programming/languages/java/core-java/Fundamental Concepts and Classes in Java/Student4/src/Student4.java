public class Student4 {
	private long id;
	private String firstName;
	private String lastName;

	//This time we use a no-arg constructor to initialize obj. state with our defaults, in case there was a need!
	//Again note that as soon as you define your first constructor, the default ctr is gone! That might be one of the needs to define a no-arg ctr.
	public Student4() {
		id = 1;
		firstName = "Reza";
		lastName = "Khojasteh";
	}

	//We also have any other ctrs (with args) that we might need, as overloads to the above ctr
	//Again, Eclipse could help!
	public Student4(long id, String firstName, String lastName) {
		super();//Ignore this line for now, we'll talk more once we get into Inheritance!
		this.id = id;//Again, note the use of "this" here; one of the cases we have to use it!
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	//We could even have a ctr which acts as a copy ctr if you will
	public Student4(Student4 anotherStudent) {
		id = anotherStudent.id;
		this.firstName = anotherStudent.firstName;//Optional use of "this" in here, although makes your code more clear!
		setLastName(anotherStudent.getLastName());//Used to be best practice before, but not recently, at least inside a ctr!
	}
	
	//Or we could have a ctr with a special use of this (not used that much in practice anyways!)
	public Student4(int id) {
		this(id, "Jordan", "Grey");//Also pay attention to the up-casting!
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
	
	//You could also define a setter like below, which uses other setters:
	public void setStudent(long id, String firstName, String lastName) {
		setId(id);
		setFirstName(firstName);
		setLastName(lastName);
	}
	
	//And you could define a getter like below, if you need:
	public Student4 getStudent() {//Pay attention to the the return type
		return this;//and also to "this"
	}
}
