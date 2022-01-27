public class PassByValue {

	public int i = 10;

	public void setValue(int j) {
		i = j;
	}

	public void someValue(int k) {
		k = 999;
	}

	public static void main(String[] a) {
		PassByValue v = new PassByValue();

		int k = 0;
		System.out.println(" k before = " + k);
		v.someValue(k);
		System.out.println(" k after = " + k);

		System.out.println(" i in object before = " + v.i);
		v.setValue(100);
		System.out.println(" i in object after = " + v.i);
	}
}