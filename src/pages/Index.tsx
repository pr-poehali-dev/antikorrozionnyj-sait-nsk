import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    { name: "Базовая обработка", price: "от 3 500 ₽", description: "Защита днища автомобиля" },
    { name: "Стандарт", price: "от 5 500 ₽", description: "Днище + арки колес" },
    { name: "Максимум", price: "от 8 500 ₽", description: "Полная защита с гарантией 3 года" },
    { name: "Скрытые полости", price: "от 2 500 ₽", description: "Обработка труднодоступных мест" }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ до 3 лет"
    },
    {
      icon: "Clock",
      title: "Быстро",
      description: "Работы выполняются за 2-4 часа"
    },
    {
      icon: "Award",
      title: "Опыт 15 лет",
      description: "Обработали более 5000 автомобилей"
    },
    {
      icon: "CheckCircle2",
      title: "Прозрачные цены",
      description: "Фиксированная стоимость без скрытых доплат"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8d2a8c64-f93d-4406-85c3-c885541e91a1.jpg",
      alt: "Процесс нанесения защитного покрытия"
    },
    {
      url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8bd7ad8d-2604-462d-a5db-6dbbb59af710.jpg",
      alt: "Автомобиль после обработки"
    },
    {
      url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/e62799f2-d98d-4b6b-8ee6-8c404cf7b330.jpg",
      alt: "Подъемник в мастерской"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">АнтиКор НСК</h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">Цены</button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm hover:text-accent transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm hover:text-accent transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-accent transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Защита вашего автомобиля от коррозии
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная антикоррозийная обработка в Новосибирске. Прозрачные цены, гарантия качества, быстрое выполнение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg" onClick={() => scrollToSection('services')}>
                  Узнать цены
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Обработанных авто</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3 года</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8d2a8c64-f93d-4406-85c3-c885541e91a1.jpg"
                alt="Антикоррозийная обработка"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">Фиксированная стоимость без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-accent">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">{service.price}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection('contacts')}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-accent mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Специальное предложение!</h4>
                <p className="text-sm text-muted-foreground">При заказе полной обработки — диагностика ходовой части в подарок. Скидка 15% при обработке двух автомобилей.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">Надежность и профессионализм в каждой детали</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon name={advantage.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="animate-fade-in overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg mb-8 opacity-90">Записывайтесь на обработку и получите бесплатную консультацию</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+73832345678" className="hover:text-accent transition-colors">+7 (383) 234-56-78</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="opacity-90">г. Новосибирск, ул. Автомобильная, 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="opacity-90">Пн-Пт: 9:00 - 19:00, Сб-Вс: 10:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Марка автомобиля</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Toyota Camry"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="opacity-90">© 2024 АнтиКор НСК. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
