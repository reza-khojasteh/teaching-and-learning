
public class Student7 extends Student6 {
	private static int count;
	
//	public Student7() {
//		count++;//OR setCount(getCount() + 1);
//	}
//	
//	public static int getCount() {
//		return count;
//	}
//
//	public static void setCount(int count) {
//		Student7.count = count;
//	}

	public static void main(String[] args) {
		Student7 s1 = new Student7();
		System.out.println(Student7.getCount());
		System.out.println(Student6.getCount());
	}

}
