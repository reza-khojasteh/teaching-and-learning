public class AsciiChar {

	public static void main(String[] args) {

		for (int i = 32; i < 127; i++) {

			System.out.write(i);
			// break line after every six characters
			if (i % 6 == 0)
				System.out.write('\n');
			else
				System.out.write('\t');
		}
		System.out.write('\n');

	}

}