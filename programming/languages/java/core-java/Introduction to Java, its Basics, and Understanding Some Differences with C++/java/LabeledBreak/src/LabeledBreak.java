
public class LabeledBreak {
	public static void main(String[] args) {
		out: for (int i = 0; i < 10; i++ ) {
			for (int k = 0; k < 10; k++) {
				if (i == k)
					break out;
			}
			System.out.println(i);
		}
	}
}
