
const fightersCounters = {
    'yu zhong': {
        name: 'Yu Zhong',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Chou', 'Ruby', 'Balmond'],
        weakAgainst: [
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья, игнорирует его регенерацию' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен против танковых бойцов' },
            { hero: 'Esmeralda', type: 'mage', reason: 'Поглощает щиты Ю Джона' },
            { hero: 'Baxia', type: 'tank', reason: 'Снижает регенерацию здоровья' },
            { hero: 'Valentina', type: 'mage', reason: 'Может скопировать его ульт и использовать против команды' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Dominance Ice'],
        strategy: 'Фокусируйтесь на анти-хиле и не давайте ему накапливать пассивные стаки'
    },
    'chou': {
        name: 'Chou',
        role: 'Fighter',
        difficulty: 'Высокий',
        strongAgainst: ['Lesley', 'Gord', 'Eudora'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление игнорирует иммунитет Чоу' },
            { hero: 'Lunox', type: 'mage', reason: 'Игнорирует иммунитет своим уроном' },
            { hero: 'Franco', type: 'tank', reason: 'Может поймать во время кулдаунов' },
            { hero: 'Khufra', type: 'tank', reason: 'Блокирует его даши' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его комбо' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Immortality'],
        strategy: 'Дождитесь когда он использует иммунитет, затем применяйте контроль'
    },
    'alucard': {
        name: 'Alucard',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Layla', 'Miя', 'Hanabi'],
        weakAgainst: [
            { hero: 'Eudora', type: 'mage', reason: 'Мгновенный контроль и взрывной урон' },
            { hero: 'Aurora', type: 'mage', reason: 'Массовый контроль не дает приблизиться' },
            { hero: 'Saber', type: 'assassin', reason: 'Ульт останавливает Алукарда' },
            { hero: 'Kaja', type: 'support', reason: 'Подавление не дает использовать жизне steal' },
            { hero: 'Lolita', type: 'tank', reason: 'Щит блокирует его атаки' }
        ],
        items: ['Sea Halberd', 'Dominance Ice', 'Antique Cuirass'],
        strategy: 'Контролируйте и убивайте быстро, не давая накопить жизне steal'
    },
    'alpha': {
        name: 'Alpha',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Zilong', 'Sun', 'Bane'],
        weakAgainst: [
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон игнорирует его щиты' },
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья' },
            { hero: 'Baxia', type: 'tank', reason: 'Снижает эффективность лечения' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его скиллов' },
            { hero: 'Claude', type: 'marksman', reason: 'Может убить до активации ульта' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Demon Hunter Sword'],
        strategy: 'Фокусируйтесь на анти-хиле и ломайте его щиты'
    },
    'argus': {
        name: 'Argus',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Alucard', 'Zilong', 'Freya'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление во время ульта' },
            { hero: 'Franco', type: 'tank', reason: 'Может держать под контролем до окончания ульта' },
            { hero: 'Aurora', type: 'mage', reason: 'Заморозка не дает атаковать' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется и китует' },
            { hero: 'Claude', type: 'marksman', reason: 'Ульт наносит урон сквозь бессмертие' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Immortality'],
        strategy: 'Контролируйте и отступайте во время его ульта, затем добивайте'
    },
    'badang': {
        name: 'Badang',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Gord', 'Layla', 'Hanabi'],
        weakAgainst: [
            { hero: 'Purify', type: 'battle spell', reason: 'Снимает его контроль' },
            { hero: 'Diggie', type: 'support', reason: 'Снимает массовый контроль' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Уклоняется от ульта' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Не может поймать' },
            { hero: 'Fanny', type: 'assassin', reason: 'Быстро убивает до комбо' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Athena\'s Shield'],
        strategy: 'Держите дистанцию и используйте Purify против его комбо'
    },
    'balmond': {
        name: 'Balmond',
        role: 'Fighter',
        difficulty: 'Низкий',
        strongAgainst: ['Sun', 'Masha', 'Bane'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его ульта' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует и наносит урон на дистанции' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' },
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Blade Armor'],
        strategy: 'Уклоняйтесь от ульта и китуйте на дистанции'
    },
    'dyrroth': {
        name: 'Dyrroth',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Tigreal', 'Gatotkaca', 'Uranus'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его комбо' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Kaja', type: 'support', reason: 'Подавление останавливает комбо' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает атаки' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Antique Cuirass'],
        strategy: 'Держите дистанцию и прерывайте его комбо контролем'
    },
    'freya': {
        name: 'Freya',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Zilong', 'Alucard', 'Sun'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление во время ульта' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает комбо' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от атак' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Athena\'s Shield'],
        strategy: 'Контролируйте и отступайте во время ее ульта'
    },
    'guinevere': {
        name: 'Guinevere',
        role: 'Fighter',
        difficulty: 'Высокий',
        strongAgainst: ['Eudora', 'Gord', 'Layla'],
        weakAgainst: [
            { hero: 'Purify', type: 'battle spell', reason: 'Снимает воздушный контроль' },
            { hero: 'Diggie', type: 'support', reason: 'Снимает массовый контроль' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Уклоняется от комбо' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Иммунитет к контролю' },
            { hero: 'Kaja', type: 'support', reason: 'Подавление останавливает комбо' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Athena\'s Shield'],
        strategy: 'Используйте Purify и уклоняйтесь от ее второго скилла'
    },
    'lapu lapu': {
        name: 'Lapu-Lapu',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Bane', 'Sun', 'Zilong'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его ульта' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Kaja', type: 'support', reason: 'Подавление в форме ульта' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает комбо' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Antique Cuirass'],
        strategy: 'Держите дистанцию и контролируйте во время ульта'
    },
    'leomord': {
        name: 'Leomord',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Hanabi', 'Layla', 'Miя'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление сбивает с коня' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль против всадника' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от атак коня' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Blade Armor'],
        strategy: 'Фокусируйтесь на нем до активации коня'
    },
    'martis': {
        name: 'Martis',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Fanny', 'Lancelot', 'Gusion'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление игнорирует его иммунитет' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает комбо' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его скиллов' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' },
            { hero: 'Aurora', type: 'mage', reason: 'Заморозка останавливает' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Athena\'s Shield'],
        strategy: 'Контролируйте и не давайте использовать комбо'
    },
    'masha': {
        name: 'Masha',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Sun', 'Zilong', 'Alucard'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется и китует' },
            { hero: 'Claude', type: 'marksman', reason: 'Массовый урон по клонам' },
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' },
            { hero: 'Baxia', type: 'tank', reason: 'Снижает ее регенерацию' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Dominance Ice'],
        strategy: 'Фокусируйтесь на анти-хиле и убивайте быстро'
    },
    'paquito': {
        name: 'Paquito',
        role: 'Fighter',
        difficulty: 'Высокий',
        strongAgainst: ['Gord', 'Eudora', 'Layla'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление останавливает комбо' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает атаки' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его скиллов' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Khufra', type: 'tank', reason: 'Блокирует его даши' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Antique Cuirass'],
        strategy: 'Держите дистанцию и контролируйте во время его комбо'
    },
    'roger': {
        name: 'Roger',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Alucard', 'Zilong', 'Freya'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление в обеих формах' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль против волка' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от атак' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Athena\'s Shield'],
        strategy: 'Фокусируйтесь на нем в форме стрелка'
    },
    'ruby': {
        name: 'Ruby',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Fanny', 'Lancelot', 'Gusion'],
        weakAgainst: [
            { hero: 'Baxia', type: 'tank', reason: 'Снижает ее жизне steal' },
            { hero: 'Sea Halberd', type: 'item', reason: 'Снижает эффективность лечения' },
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от контроля' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Dominance Ice'],
        strategy: 'Используйте анти-хил и взрывной урон'
    },
    'sun': {
        name: 'Sun',
        role: 'Fighter',
        difficulty: 'Низкий',
        strongAgainst: ['Zilong', 'Alucard', 'Freya'],
        weakAgainst: [
            { hero: 'Claude', type: 'marksman', reason: 'Ульт убивает клонов быстро' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Ульт по всем целям' },
            { hero: 'Lunox', type: 'mage', reason: 'Массовый урон по клонам' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' },
            { hero: 'Baxia', type: 'tank', reason: 'Снижает лечение клонов' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Dominance Ice'],
        strategy: 'Используйте массовый урон против клонов'
    },
    'thamuz': {
        name: 'Thamuz',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Yu Zhong', 'Balmond', 'Masha'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его скиллов' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Lunox', type: 'mage', reason: 'Урон в % от здоровья' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон эффективен' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Antique Cuirass'],
        strategy: 'Держите дистанцию и используйте анти-хил'
    },
    'xborg': {
        name: 'X.Borg',
        role: 'Fighter',
        difficulty: 'Средний',
        strongAgainst: ['Gord', 'Layla', 'Hanabi'],
        weakAgainst: [
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от его ульта' },
            { hero: 'Lancelot', type: 'assassin', reason: 'Мобильность не дает попасть' },
            { hero: 'Claude', type: 'marksman', reason: 'Китует на дистанции' },
            { hero: 'Karrie', type: 'marksman', reason: 'Истинный урон ломает щит' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' }
        ],
        items: ['Sea Halberd', 'Necklace of Durance', 'Demon Hunter Sword'],
        strategy: 'Ломайте его щит и используйте анти-хил'
    },
    'zilong': {
        name: 'Zilong',
        role: 'Fighter',
        difficulty: 'Низкий',
        strongAgainst: ['Lesley', 'Gord', 'Eudora'],
        weakAgainst: [
            { hero: 'Kaja', type: 'support', reason: 'Подавление останавливает его' },
            { hero: 'Franco', type: 'tank', reason: 'Контроль прерывает атаки' },
            { hero: 'Khufra', type: 'tank', reason: 'Блокирует его даши' },
            { hero: 'Wanwan', type: 'marksman', reason: 'Уклоняется от броска' },
            { hero: 'Lunox', type: 'mage', reason: 'Взрывной урон убивает быстро' }
        ],
        items: ['Wind of Nature', 'Winter Truncheon', 'Blade Armor'],
        strategy: 'Контролируйте и не давайте приближаться'
    }
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    displayFightersCounters();
    setupFilters();
});

function displayFightersCounters(filterType = 'all') {
    const grid = document.getElementById('countersGrid');
    grid.innerHTML = '';

    Object.keys(fightersCounters).forEach(heroKey => {
        const hero = fightersCounters[heroKey];
        
        const counterCard = document.createElement('div');
        counterCard.className = 'counter-card';
        
        let countersHTML = '';
        hero.weakAgainst.forEach(counter => {
            if (filterType === 'all' || filterType === counter.type) {
                countersHTML += `
                    <div class="counter-item ${counter.type}">
                        <div class="counter-hero">${counter.hero}</div>
                        <div class="counter-reason">${counter.reason}</div>
                    </div>
                `;
            }
        });

        counterCard.innerHTML = `
            <div class="hero-header">
                <div class="hero-avatar">${hero.name.charAt(0)}</div>
                <div class="hero-info">
                    <div class="hero-name">${hero.name}</div>
                    <div class="hero-role">${hero.role} • ${hero.difficulty}</div>
                </div>
            </div>
            <div class="counters-section">
                <h3>Силен против:</h3>
                <div class="strong-against">
                    ${hero.strongAgainst.map(h => `<span class="strong-hero">${h}</span>`).join('')}
                </div>
                <h3>Слаб против:</h3>
                <div class="weak-against">
                    ${countersHTML || '<div class="no-counters">Нет контр-пиков для выбранного фильтра</div>'}
                </div>
                <h3>Рекомендуемые предметы:</h3>
                <div class="recommended-items">
                    ${hero.items.map(item => `<span class="item">${item}</span>`).join('')}
                </div>
                <div class="strategy">
                    <strong>Стратегия:</strong> ${hero.strategy}
                </div>
            </div>
        `;

        grid.appendChild(counterCard);
    });
}

function setupFilters() {
    const counterType = document.getElementById('counterType');
    counterType.addEventListener('change', function() {
        displayFightersCounters(this.value);
    });
}