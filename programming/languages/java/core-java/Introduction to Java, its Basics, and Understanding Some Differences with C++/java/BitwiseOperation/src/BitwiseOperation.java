public class BitwiseOperation {
	public static void main(String[] args) {
		int op1 = 84;
		int op2 = 327;

		System.out.println(op1 + "  " +
				Integer.toBinaryString(op1) + "  " +
				"0" + Integer.toOctalString(op1) + "  " +
				"0X" + Integer.toHexString(op1));

		System.out.println(op2 + "  " +
				Integer.toBinaryString(op2) + "  " +
				"0" + Integer.toOctalString(op2) + "  " +
				"0X" + Integer.toHexString(op2));
		int op3 = op1 & op2;
		System.out.println(op3 + "  " +
				Integer.toBinaryString(op3) + "  " +
				"0" + Integer.toOctalString(op3) + "  " +
				"0X" + Integer.toHexString(op3));
		int op4 = op1 | op2;
		System.out.println(op4 + "  " +
				Integer.toBinaryString(op4) + "  " +
				"0" + Integer.toOctalString(op4) + "  " +
				"0X" + Integer.toHexString(op4));
		int op5 = op1 ^ op2;
		System.out.println(op5 + "  " +
				Integer.toBinaryString(op5) + "  " +
				"0" + Integer.toOctalString(op5) + "  " +
				"0X" + Integer.toHexString(op5));

		System.out.println(~op2 + "  " +
				Integer.toBinaryString(~op2) + "  " +
				"0" + Integer.toOctalString(~op2) + "  " +
				"0X" + Integer.toHexString(~op2));

	}
}

