import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", car: "", date: "" });

  const services = [
    { name: "Базовая обработка", price: "от 3 500 ₽", description: "Защита днища автомобиля" },
    { name: "Стандарт", price: "от 5 500 ₽", description: "Днище + арки колес" },
    { name: "Максимум", price: "от 8 500 ₽", description: "Полная защита с гарантией 3 года" },
    { name: "Скрытые полости", price: "от 2 500 ₽", description: "Обработка труднодоступных мест" }
  ];

  const advantages = [
    { icon: "Shield", title: "Гарантия качества", description: "Официальная гарантия на все виды работ до 3 лет" },
    { icon: "Clock", title: "Быстро", description: "Работы выполняются за 2-4 часа" },
    { icon: "Award", title: "Опыт 15 лет", description: "Обработали более 5000 автомобилей" },
    { icon: "CheckCircle2", title: "Прозрачные цены", description: "Фиксированная стоимость без скрытых доплат" }
  ];

  const workSteps = [
    { step: "01", title: "Бесплатный осмотр", description: "Диагностика и дефектовка автомобиля", icon: "Search" },
    { step: "02", title: "Подготовка", description: "Очистка и обезжиривание поверхностей", icon: "Droplet" },
    { step: "03", title: "Обработка", description: "Нанесение защитного покрытия", icon: "Brush" },
    { step: "04", title: "Контроль", description: "Проверка качества работ", icon: "CheckCircle2" }
  ];

  const reviews = [
    { name: "Алексей М.", car: "Toyota Camry", text: "Отличная работа! Обработали машину за 3 часа, все чисто и аккуратно. Цена соответствует заявленной.", rating: 5 },
    { name: "Дмитрий К.", car: "Nissan X-Trail", text: "Делал полную обработку. Мастера профессионалы, всё объяснили и показали. Рекомендую!", rating: 5 },
    { name: "Сергей П.", car: "Lada Vesta", text: "Второй год езжу после обработки - днище как новое. Деньги потрачены не зря.", rating: 5 }
  ];

  const faqItems = [
    { question: "Как долго держится защитное покрытие?", answer: "При правильной эксплуатации защитное покрытие служит от 3 до 5 лет. Мы даем официальную гарантию 3 года." },
    { question: "Нужна ли специальная подготовка автомобиля?", answer: "Нет, просто приезжайте к нам. Мы самостоятельно проведем все необходимые подготовительные работы." },
    { question: "Сколько времени займет обработка?", answer: "В зависимости от типа обработки от 2 до 4 часов. Можете подождать в комфортной зоне ожидания или оставить автомобиль." },
    { question: "Можно ли обрабатывать новый автомобиль?", answer: "Да, более того, мы рекомендуем проводить обработку сразу после покупки для максимальной защиты." },
    { question: "Какие материалы вы используете?", answer: "Мы работаем только с сертифицированными материалами ведущих производителей: Dinitrol, Tectyl, Rust Stop." }
  ];

  const gallery = [
    { url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8d2a8c64-f93d-4406-85c3-c885541e91a1.jpg", alt: "Процесс нанесения защитного покрытия" },
    { url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8bd7ad8d-2604-462d-a5db-6dbbb59af710.jpg", alt: "Автомобиль после обработки" },
    { url: "https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/e62799f2-d98d-4b6b-8ee6-8c404cf7b330.jpg", alt: "Подъемник в мастерской" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <Icon name="ShieldCheck" size={24} className="text-accent" />
              АнтиКор НСК
            </h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('inspection')} className="text-sm font-medium hover:text-accent transition-colors">Осмотр</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">Цены</button>
              <button onClick={() => scrollToSection('how-we-work')} className="text-sm font-medium hover:text-accent transition-colors">Как работаем</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-accent transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-accent transition-colors">FAQ</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90 shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-white to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">✨ Защита от коррозии с 2009 года</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Надежная защита вашего автомобиля
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная антикоррозийная обработка в Новосибирске. Прозрачные цены, гарантия качества до 3 лет, быстрое выполнение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg shadow-lg" onClick={() => scrollToSection('inspection')}>
                  Бесплатный осмотр
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="border-2">
                  Узнать цены
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Обработанных авто</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Года гарантии</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/9a8f5caa-e026-4f29-91ea-0169a4b6aa74/files/8d2a8c64-f93d-4406-85c3-c885541e91a1.jpg"
                alt="Антикоррозийная обработка"
                className="rounded-2xl shadow-2xl w-full relative"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="inspection" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                <Icon name="ClipboardCheck" size={40} className="text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатный осмотр и дефектовка</h2>
              <p className="text-xl opacity-90">Запишитесь на диагностику — это ни к чему не обязывает</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="Eye" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Визуальный осмотр</h3>
                      <p className="text-sm opacity-80">Проверка состояния кузова, днища и скрытых полостей</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Детальный отчет</h3>
                      <p className="text-sm opacity-80">Подробное описание дефектов с фотографиями</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="Calculator" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Расчет стоимости</h3>
                      <p className="text-sm opacity-80">Точная смета на необходимые работы</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="MessageCircle" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Консультация</h3>
                      <p className="text-sm opacity-80">Рекомендации по защите и уходу за автомобилем</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Записаться на бесплатный осмотр</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Иван"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Марка и модель авто</label>
                      <input
                        type="text"
                        value={formData.car}
                        onChange={(e) => setFormData({...formData, car: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Toyota Camry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Удобная дата</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full mt-6 bg-accent hover:bg-accent/90 text-white py-6 text-lg">
                    Записаться на осмотр
                    <Icon name="Calendar" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Цены на услуги</h2>
            <p className="text-lg text-muted-foreground">Фиксированная стоимость без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-accent hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">{service.price}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full border-2 hover:bg-accent hover:text-white" onClick={() => scrollToSection('inspection')}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl border-l-4 border-accent">
            <div className="flex items-start gap-4">
              <Icon name="Sparkles" size={28} className="text-accent mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-2">Специальное предложение!</h4>
                <p className="text-muted-foreground">При заказе полной обработки — диагностика ходовой части в подарок. Скидка 15% при обработке двух автомобилей.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-20 px-4 bg-gradient-to-br from-background to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground">Четыре простых шага к надежной защите</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-accent">
                  <div className="text-6xl font-bold text-accent/20 mb-4">{step.step}</div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <Icon name={step.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < workSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">Надежность и профессионализм в каждой детали</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon} size={36} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-background to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="animate-fade-in overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.car}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-background to-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 opacity-90">Записывайтесь на обработку и получите бесплатную консультацию</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Телефон</div>
                    <a href="tel:+73832345678" className="text-xl hover:text-accent transition-colors">+7 (383) 234-56-78</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Адрес</div>
                    <div className="text-lg opacity-90">г. Новосибирск, ул. Автомобильная, 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Режим работы</div>
                    <div className="text-lg opacity-90">Пн-Пт: 9:00 - 19:00</div>
                    <div className="text-lg opacity-90">Сб-Вс: 10:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Марка автомобиля</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Toyota Camry"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 py-6 text-lg">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-90">© 2024 АнтиКор НСК. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
