//A simulation of an ordered pair
public class Pair<F, S> {

	private F first;
	private S second;

	public Pair(F f, S s) {
		first = f;
		second = s;
	}

	public String toString() {
		return "("+ first + ", " + second + ")";
	}

	public static <F, S> Pair<S, F> flip(Pair<F, S> p) {//Note that S and F here don't have anything to do with S and F above!
		Pair<S, F> flipped = new Pair<S, F>(p.second, p.first);
		return flipped;
	}
	
	//OR
//	public Pair<S, F> flip1() {
//		Pair<S, F> flipped = new Pair<S, F>(second, first);
//		return flipped;
//	}

	public static void main(String[] args) {
		Pair<Integer, String> p = new Pair<>(1, "Test");
		
		System.out.println(p);
		
		System.out.println(Pair.<Integer, String>flip(p));
		//OR SIMPLY AS: System.out.println(Pair.flip(p));
		
//		System.out.println(p.flip1());
	}
}