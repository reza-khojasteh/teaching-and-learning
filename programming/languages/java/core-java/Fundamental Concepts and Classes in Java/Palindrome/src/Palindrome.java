public class Palindrome {

	public boolean same(char ch1, char ch2) {
		return (ch1 == ch2) ? true : false;
	}

	public boolean palindrom(String s) {
		int len = s.length();
		char token = 0;
		Stack stack = new Stack(len);
		
		for (int i = 0; i < len; i++) {
			token = s.charAt(i);
			if (token != ' ')
				stack.push(token);

		}
		
		for (int j = 0; j < len; j++) {
			token = s.charAt(j);
			if (token != ' ')
				if (!same(stack.pop(), s.charAt(j)))
					return false;
		}
		
		return (stack.isEmpty()) ? true : false;
	}

//	public String reverse(String original) {
//		String reverse = "";
//		int length = original.length();
//
//		for (int i = length - 1; i >= 0; i--)
//			reverse = reverse + original.charAt(i);
//		
//		return reverse;
//	}

	public static void main(String[] a) {
		Palindrome s = new Palindrome();		
		System.out.println( s.palindrom(a[0]) ? "Palindrome" : "Not Palindrome");				
	}
}
