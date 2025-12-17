import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTool, setActiveTool] = useState('карандаш');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'portfolio', label: 'Портфолио', icon: 'Briefcase' },
    { id: 'services', label: 'Услуги', icon: 'Palette' },
    { id: 'about', label: 'О нас', icon: 'Users' },
    { id: 'blog', label: 'Блог', icon: 'BookOpen' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const portfolioItems = [
    { title: 'Логотип для StartUp', category: 'Брендинг', year: '2024' },
    { title: 'Дизайн упаковки', category: 'Упаковка', year: '2024' },
    { title: 'Веб-дизайн магазина', category: 'Web', year: '2023' },
    { title: 'Иллюстрации для книги', category: 'Иллюстрация', year: '2023' },
  ];

  const services = [
    { name: 'Брендинг', price: 'от 50 000₽', icon: 'Tag' },
    { name: 'Веб-дизайн', price: 'от 30 000₽', icon: 'Monitor' },
    { name: 'Упаковка', price: 'от 25 000₽', icon: 'Package' },
    { name: 'Иллюстрация', price: 'от 15 000₽', icon: 'PenTool' },
  ];

  const blogPosts = [
    { title: 'Тренды дизайна 2024', date: '15.12.2024', views: 127 },
    { title: 'Как выбрать шрифт', date: '10.12.2024', views: 89 },
    { title: 'Психология цвета', date: '05.12.2024', views: 156 },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="win95-border bg-[#C0C0C0] p-6">
              <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
                Добро пожаловать в Paint Design Studio
              </div>
              <div className="bg-white win95-inset p-4 text-lg space-y-3">
                <p>Мы создаем графический дизайн с 1995 года!</p>
                <p>Наша студия специализируется на:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Брендинге и айдентике</li>
                  <li>Веб-дизайне</li>
                  <li>Дизайне упаковки</li>
                  <li>Иллюстрации</li>
                </ul>
              </div>
            </div>

            <div className="win95-border bg-[#C0C0C0] p-4">
              <div className="bg-[#000080] text-white px-2 py-1 mb-3">
                Инструменты дизайнера
              </div>
              <div className="flex gap-2 flex-wrap">
                {[
                  { name: 'Карандаш', emoji: '✏️', cursor: 'pencil-cursor' },
                  { name: 'Кисть', emoji: '🖌️', cursor: 'paint-cursor' },
                  { name: 'Ластик', emoji: '🧹', cursor: 'crosshair' },
                  { name: 'Заливка', emoji: '🪣', cursor: 'cell' },
                  { name: 'Текст', emoji: '📝', cursor: 'text' },
                  { name: 'Линия', emoji: '📏', cursor: 'crosshair' }
                ].map((tool) => (
                  <div 
                    key={tool.name}
                    onClick={() => {
                      setActiveTool(tool.name.toLowerCase());
                      document.body.className = tool.cursor;
                    }}
                    className={`win95-border px-4 py-2 hover:bg-[#A0A0A0] cursor-pointer transition-all ${
                      activeTool === tool.name.toLowerCase() ? 'bg-white' : 'bg-[#C0C0C0]'
                    }`}
                  >
                    <span className="mr-2">{tool.emoji}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
              <div className="mt-3 win95-inset bg-white p-2 text-sm">
                Выбран инструмент: <strong>{activeTool}</strong>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="win95-border bg-[#C0C0C0] p-6">
            <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
              Наши работы
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioItems.map((item, idx) => (
                <div key={idx} className="win95-border bg-white p-4">
                  <div className="bg-[#C0C0C0] win95-inset h-40 mb-3 flex items-center justify-center text-6xl">
                    🎨
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-[#808080]">{item.category} • {item.year}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="win95-border bg-[#C0C0C0] p-6">
            <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
              Наши услуги
            </div>
            <div className="space-y-3">
              {services.map((service, idx) => (
                <div key={idx} className="win95-border bg-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#C0C0C0] win95-border p-2">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <span className="text-lg font-bold">{service.name}</span>
                  </div>
                  <span className="text-[#000080] font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="win95-border bg-[#C0C0C0] p-6">
            <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
              О нашей студии
            </div>
            <div className="bg-white win95-inset p-4 text-lg space-y-4">
              <p>
                Paint Design Studio была основана в далеком 1995 году, когда графический дизайн 
                только начинал свой путь в цифровую эру.
              </p>
              <div className="grid grid-cols-3 gap-4 my-4">
                {['👨‍💻', '🎨', '💡'].map((emoji, idx) => (
                  <div key={idx} className="win95-border bg-[#C0C0C0] p-6 text-center text-5xl">
                    {emoji}
                  </div>
                ))}
              </div>
              <p>
                Мы гордимся своим ретро-стилем и уникальным подходом к каждому проекту!
              </p>
              <div className="win95-border bg-[#FFFF00] p-3 mt-4">
                <strong>Факт:</strong> Мы до сих пор используем мышь с шариком!
              </div>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="win95-border bg-[#C0C0C0] p-6">
            <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
              Наш блог
            </div>
            <div className="space-y-3">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="win95-border bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <div className="flex justify-between text-[#808080]">
                    <span>📅 {post.date}</span>
                    <span>👁 {post.views} просмотров</span>
                  </div>
                  <div className="mt-3">
                    <button className="win95-border bg-[#C0C0C0] px-4 py-1 hover:bg-[#A0A0A0]">
                      Читать далее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="win95-border bg-[#C0C0C0] p-6">
            <div className="bg-[#000080] text-white px-2 py-1 mb-4 text-xl">
              Свяжитесь с нами
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white win95-inset p-4 space-y-3">
                <div className="space-y-2">
                  <label className="block font-bold">Имя:</label>
                  <input 
                    type="text" 
                    className="w-full win95-inset bg-white p-2 text-lg border-2" 
                    placeholder="Введите имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold">Email:</label>
                  <input 
                    type="email" 
                    className="w-full win95-inset bg-white p-2 text-lg border-2" 
                    placeholder="mail@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold">Сообщение:</label>
                  <textarea 
                    className="w-full win95-inset bg-white p-2 text-lg border-2 h-24" 
                    placeholder="Ваше сообщение"
                  />
                </div>
                <button className="win95-border bg-[#C0C0C0] px-6 py-2 hover:bg-[#A0A0A0] font-bold">
                  Отправить
                </button>
              </div>
              
              <div className="bg-white win95-inset p-4 space-y-4">
                <div>
                  <div className="font-bold mb-1">📞 Телефон:</div>
                  <div>+7 (495) 123-45-67</div>
                </div>
                <div>
                  <div className="font-bold mb-1">📧 Email:</div>
                  <div>info@paintdesign.ru</div>
                </div>
                <div>
                  <div className="font-bold mb-1">📍 Адрес:</div>
                  <div>Москва, ул. Дизайнерская, д. 95</div>
                </div>
                <div className="win95-border bg-[#C0C0C0] p-3 mt-4">
                  <div className="font-bold mb-2">Режим работы:</div>
                  <div>Пн-Пт: 10:00 - 19:00</div>
                  <div>Сб-Вс: Выходной</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#008080] p-4 paint-cursor">
      <div className="max-w-6xl mx-auto">
        <div className="win95-border bg-[#C0C0C0] mb-4">
          <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] text-white px-3 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">🎨 Paint Design Studio</span>
            </div>
            <div className="flex gap-1">
              <button className="win95-border bg-[#C0C0C0] w-6 h-6 flex items-center justify-center text-black hover:bg-[#A0A0A0]">
                _
              </button>
              <button className="win95-border bg-[#C0C0C0] w-6 h-6 flex items-center justify-center text-black hover:bg-[#A0A0A0]">
                □
              </button>
              <button className="win95-border bg-[#C0C0C0] w-6 h-6 flex items-center justify-center text-black hover:bg-[#A0A0A0]">
                ✕
              </button>
            </div>
          </div>

          <div className="bg-[#C0C0C0] border-b-2 border-[#808080] p-2">
            <div className="flex gap-1 flex-wrap">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`win95-border px-4 py-1 flex items-center gap-2 hover:bg-[#A0A0A0] ${
                    activeSection === item.id ? 'bg-white' : 'bg-[#C0C0C0]'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#C0C0C0]">
            {renderContent()}
          </div>

          <div className="bg-[#C0C0C0] border-t-2 border-white p-2 flex items-center gap-2">
            <div className="win95-inset px-3 py-1 flex-1 flex items-center gap-2">
              <span>Для справки нажмите F1</span>
            </div>
            <div className="win95-inset px-3 py-1 min-w-[120px] text-center">
              Ready
            </div>
          </div>
        </div>

        <div className="win95-border bg-[#C0C0C0] p-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <button className="win95-border bg-[#C0C0C0] px-4 py-1 hover:bg-[#A0A0A0]">
              <span className="flex items-center gap-2">
                <span className="text-2xl">🪟</span>
                <span>Пуск</span>
              </span>
            </button>
            <div className="flex-1 win95-inset bg-[#C0C0C0] px-3 py-1 text-left">
              Paint Design Studio - © 1995-2024
            </div>
            <div className="win95-inset bg-[#008080] px-3 py-1">
              🕐 {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;