public class Student {

	private String name;
	private int mark;

	public Student(String name, int mark) {
		this.name = name;
		this.mark = mark;
	}

	public int getMark() {
		return mark;
	}

	@Override
	public String toString() {
		return "Student [name=" + name + ", mark=" + mark + "]";
	}	
}    
