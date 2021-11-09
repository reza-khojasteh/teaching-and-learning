@FunctionalInterface
public interface Action<T> {
	void change(T t);
}
