@FunctionalInterface
public interface GenericOperator<T> {
	T operate(T... operands);
}
