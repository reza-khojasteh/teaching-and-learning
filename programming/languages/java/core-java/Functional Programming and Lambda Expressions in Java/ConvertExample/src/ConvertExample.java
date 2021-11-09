public class ConvertExample {

	public static void transform(Convert<Integer, String> f, Integer i, String s) {
		System.out.println(f.change(i, s));
	}

	public static void main(String[] args) {
//		int j = 3;
		transform(
				(Integer i, String s) -> {return String.valueOf((char) (s.charAt(0) + i));}, 
				0, 
				"a"
				);
	}
}
