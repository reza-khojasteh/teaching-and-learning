public class Student3 {
	private long id;
	private String firstName;
	private String lastName;
	
	//This time we use a no-arg constructor to initialize obj. state. Note that as soon as you define your first constructor, the default ctr is gone!
	//The only problem is that all objects are initialized with the same state and most probably, you should set the value of their properties later!
	//That's why in the next examples, we would mostly use ctrs with args.
	public Student3() {
		id = 1;
		firstName = "Reza";
		lastName = "Khojasteh";
	}
	
	//Also, you "could" give access to other classes using setters/getters
	//Eclipse could help you in generating basic setters/getters!
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
		//Note the use of "this" here; one of the cases we have to use it!
		//check "id = id;" to see what happens!
		//Also note that in many cases in industry, you need to having checkings inside the setters, which are application-based and obviously can't be done by Eclipse!
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
	
	public static void main(String[] args) {
		Student3 student1 = new Student3();//Using the above no-arg ctr

		System.out.println(student1.id);
		System.out.println(student1.firstName);
		System.out.println(student1.lastName);
		
		//It would even be better if you get into the habit of using getters/setters all the time, even in your class, like below:
		//System.out.println(student1.getId());
		//System.out.println(student1.getFirstName());
		//System.out.println(student1.getLastName());
	}
}
