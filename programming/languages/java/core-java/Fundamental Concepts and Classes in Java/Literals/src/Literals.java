/** use of named constant - enum class */
enum Suit {
	CLUBS, DIAMODS, HEARTS, SPADES
}

public class Literals {

	public final static char MAX_CHAR = 0xffff; // max char hex value
	public final static byte MAX_BYTE = 0x7f; // max byte hex value
	public final static short MAX_SHORT = 0x7fff; // max short hex value
	public static int aHexInt = 0x2f; // static hexadecimal (lowercase)
	public final int A_FINAL_HEX_INT = 0X2F; // final hexadecimal (uppercase)
	public int anOctalInt = 0177; // Octal (leading zero)

	// Hex and Oct also work with long.
	public long aLongVal = 200L; // long suffix
	long anExplicitLong = 200;

	public float aFloatVal = 1;
	float  aFloatVal2 = 1F; // float suffix
	float aFloatVal3 = 1f; // float suffix
	public float anotherFloatVal = 1e-45f; // 10 to the power
	float f5 = 1e+9f; // float suffix

	public double aDoubleValue = 1d; // double suffix
	double aDoubleValue2 = 1e-2D; // double suffix
	double aDoubleValue3 = 47e47d; // 10 to the power

	String s = "From Literals class:"; //string literal

	/** the entry point in program execution main method */

	public static void main(String[] args) {
		System.out.println("From Suit class: CLUBS = " + Suit.CLUBS);

		Literals o = new Literals();

		System.out.println(o.s + " MAX_BYTE = " + Literals.MAX_BYTE);
		System.out.println(o.s + " MAX_SHORT = " + Literals.MAX_SHORT);
		System.out.println(o.s + " aFinalHexInt = " + o.A_FINAL_HEX_INT);

		System.out.println(o.s + " anOctalInt = " + o.anOctalInt);
		System.out.println(o.s + " aFloatVal = " + o.aFloatVal);
		System.out.println(o.s + " anotherFloatVal = " + o.anotherFloatVal);
		System.out.println(o.s + " aDoubleValue2 = " + o.aDoubleValue2);
		System.out.println(o.s + " aDoubleValue3 = " + o.aDoubleValue3);
	}
}