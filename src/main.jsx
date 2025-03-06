import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { TaskProvider } from './TaskContext.jsx';
import { FilterProvider } from './FilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TaskProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </TaskProvider>
  </StrictMode>,
)
