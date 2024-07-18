import React, { useState, useCallback, useMemo } from 'react';

const PerformanceComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const computedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={increment}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default PerformanceComponent;
