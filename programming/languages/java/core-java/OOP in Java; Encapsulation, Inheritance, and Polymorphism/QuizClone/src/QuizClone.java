class A implements Cloneable {
	int i;
	String s;

	A(int i, String s) {
		this.i = i;
		this.s = s;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}

}

public class QuizClone {

	public void m(int k, A a) {
		k = 1;
		a.i = k;
		a.s = "modified";
	}

	public static void main(String[] args) throws CloneNotSupportedException {
		A a = new A(0, "init");
		int k = 0;
		new QuizClone().m(k,a);
		A b = (A)a.clone();

		System.out.println(" k = " + k + ", b.i = " + b.i + ", b.s = " + b.s);
	}
}