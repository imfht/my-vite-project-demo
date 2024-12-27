# React + TypeScript + Vite
demo

## 这是怎么工作的？
1. 2024年，应该使用vite启动应用
所以：
```
npm create vite@latest
```
2. 安装tailwind css
```
npm install -D tailwindcss postcss autoprefixer
```
让tailwindcss启动
```
npx tailwindcss init
```
会生成 tailwind.config.js，更新掉里面的数据
```
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
```
3. 让postcss生效
新建文件`postcss.config.js`,写入如下内容
```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
4. 在index.css里写入内容
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. 在App.tsx里测试css
可以看到已经跑起来了

```
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="flex justify-center space-x-4">
      <p className="text-4xl font-bold mt-4">Vite + React</p>
      </div>
    </div>
  )
}

export default App
```