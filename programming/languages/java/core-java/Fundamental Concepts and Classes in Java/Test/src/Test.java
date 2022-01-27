class Generic<T> {

	T t;

	public Generic(T t) {
		this.t = t;
	}

	public String toString() {
		return t.toString();
	}
}

class X { 

}

public class Test {

	public static void main(String[] arg) {
		Generic<Integer> gs = new Generic<Integer>(new Integer(1));
		Generic<X> gx = new Generic<X>(new X());
		System.out.println(gs);
		System.out.println(gx);
	}
}
