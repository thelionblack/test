import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

export const HomePage = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Что такое компонент?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Компонент — это часть пользовательского интерфейса, которая имеет
            свою собственную логику и внешний вид. Компонент может быть вложен в
            другой компонент! Имена компонентов React всегда должны начинаться с
            заглавной буквы, в то время как HTML-теги должны быть в нижнем
            регистре. Компоненты позволяют разделить пользовательский интерфейс
            на независимые, повторно используемые части и работать с каждой из
            частей отдельно. Концептуально компоненты похожи на функции
            JavaScript. Они принимают произвольные входные данные (называемые
            «props» или свойствами) и возвращают React-элементы, описывающие,
            что должно появиться на экране. Компоненты бывают Функциональные и
            классовые. Все React-компоненты должны вести себя как чистые функции
            в плане своих свойств. Т.е их props должны быть доступны только для
            чтения!
          </Typography>
          <Typography>Так же компоненты разделяют на:</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'stateless - компоненты которые не несут в себе какой-либо логики, кроме отрисовки;'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'statefull - компоненты которые помимо отрисовки несут в себе какую-то логику и имеют состояние;'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'управляймые - в таких компонентах данные форм обрабатываються самим компонентам и она храниться в state;'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'неуправляймые - в таких компонентах данные форм храняться в DOM и мы считываем данные прямо из DOM с помощью Ref;'
                }
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое react элемент?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Элементы — это самые маленькие строительные блоки приложений React.
            Грубо говаря это то из чего сделаны компоненты. Элемент описывает,
            что вы хотите видеть на экране! React-элементы — неизменяемы. Создав
            однажды элемент, вы не сможете изменить его дочерние элементы или
            атрибуты.В отличие от DOM-элементов браузера, элементы React —
            обычные объекты, лёгкие для создания. React DOM берёт заботу по
            обновлению DOM на себя для соответствия элементам React. Элементы
            также могут быть пользовательскими компонентами.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Функциональные компоненты?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'Используют hooks вместо ЖЦ -Более просты для понимания и написания'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'Конечный размер бандла меньше, чем на классовых компонентах'
                }
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Классовые компоненты?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'Для использования нужно наследоваться от React.Component или React.PureComponent и должен быть реализован метод render()'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'Используют методы жизненных циклов -Для управления состоянием используют this.setState(state, [callback]) -Более сложные для понимания и написания -Считаються устаревшими'
                }
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>
            В чем отличие между react элементом и компонентом?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            элементы React представляют описание того, что должно быть
            отрендерено, в то время как компоненты React определяют, как
            компонент ведет себя и что он отображает. Элементы React создаются
            из компонентов React и используются для согласования и отображения
            на экране.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое JSX? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            это расширение синтаксиса JavaScript! JSX компилируеться с помощью
            Babel в React.createElement(). Эти объекты называются элементами
            «React-элементами». В JSX более строгие требования, чем в HTML. Вы
            должны закрывать теги типа <br />. Ваш компонент также не может
            возвращать несколько JSX-тегов. Вы должны обернуть их в общего
            родителя. В фигурных скобках JSX можно поместить любое корректное
            выражение JavaScript. Свойства по умолчанию принимают значение true.
            JSX рекомендуеться обёртывать в круглые скобки, чтобы избежать
            ошибок, связанных с автоматической вставкой точки с запятой.
            Поскольку JSX ближе к JavaScript, чем к HTML, React DOM использует
            соглашение об именах свойств camelCase вместо имён атрибутов HTML.
            Например, class становится className в JSX, а tabindex становится
            [tabIndex]. Если тег пуст, можно немедленно его закрыть с помощью
            {'/>'}, точно так же, как в XML: <div />. JSX предотвращает
            атаки-инъекции. т.е Безопасно встраивать пользовательские данные в
            JSX
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>что такое virtual dom?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            VDOM представляет собой абстрактное представление реального
            DOM-дерева. VDOM синхронизируеться с реальным DOM при помощи
            библиотеке, такой как ReactDOM. Этот процес называеться
            согласованием.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое fiber?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Это новый механизм согласования деревьев! Раньше после изменения
            state рендер блокировался до тех пор пока React не внесет изменения
            в UI.Был рекурсивный обход дерева! С приходом fiber ситуация
            изменилась: и он стремиться обновлять UI с частотой в 60кадров в
            секунду, поэтому каждые 16мс Fiber прверяет не появилось ли какая-то
            работа. И если состояние изменилась, fiber может вносить изменения в
            процесс изменения UI путем отмены, приостановки или изменения
            прооритетов! За щет асинхронова прохода по дереву. fiber можно
            разделить на две фазы: 1 - render это фаза асинхроная! это фаза
            передаст в фазу commit список с узлами над которыми надо выполнить
            работу список будет от фильтрован по приоритетам 2 - commit В
            результате полученого списка fiber синхронизирует current дерево с
            реальным DOM -Алгоритм согласования начинаеться с самого верхенего
            узла -Каждый узел обрабатываеться по разнаму Структура fiber-узла:
            {'\r\n' +
              `
              stateNode: new ClickCounter, Это ссылка на экземпляр компонента, связанного с данным fiber-узлом.\r\n
              type: ClickCounter, Это тип компонента, связанного с fiber-узлом.\r\n
              alternate: null, Это ссылка на альтернативный fiber-узел в другом дереве, используемая в процессе согласования.\\r\\n
              key: null, Это ключ компонента, используемый для оптимизации процесса согласования и обновления дерева компонентов.\\r\\n
              updateQueue: null, Это очередь обновлений, содержащая изменения, которые должны быть применены к компоненту.\\r\\n
              memoizedState: {count: 0}, Это сохраненное состояние компонента, которое будет использоваться при следующем рендеринге.\\r\\n
              pendingProps: {}, Это текущие свойства компонента, переданные ему из родительского компонента.\\r\\n
              memoizedProps: {}, Это сохраненные свойства компонента, которые будут использоваться при следующем рендеринге.\\r\\n
              tag: 1, Это тип fiber-узла, который указывает, как обрабатывать данный узел.\\r\\n
              effectTag: 0, Это флаг, указывающий на тип эффекта, который должен быть применен к компоненту\\r\\n
              nextEffect: null Это ссылка на следующий fiber-узел, который имеет эффекты и должен быть обработан при согласовании\\r\\n
            \\r\\n`}
            Для работы с приоритетами Fiber использует: -requestAnimationFrame
            для операций с высоким приоритетом -requestIdleCallback для операций
            с низким приоритетом
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое согласование?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Процес сравнение двух деревьев!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>списки и ключи в react</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Для отображения списков компонентов вы будете использовать такие
            возможности JavaScript, как циклы и методы массива. Для каждого
            элемента списка вы должны передать строку или число в props key,
            которое однозначно идентифицирует этот элемент среди его соседей.
            React использует ваши ключи, чтобы узнать, что произошло, если вы
            позже вставите, удалите или измените порядок элементов.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>обработка событий в react </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            События в реакт это некие обертки над реальными событиями. Они
            являються кросбраузерными, и работают с react деревом. React
            автоматически удаляет обработчики. Все события в React всплывают,
            кроме onScroll, которое действует только на тег JSX, к которому вы
            его прикрепили. В редких случаях вам может понадобиться перехватить
            все события на дочерних элементах, даже если они прекратили
            распространение. Вы можете сделать это, добавив Capture в конце
            имени события. Каждое событие распространяется в три фазы: -Оно
            перемещается вниз, вызывая все обработчики onClickCapture.
            -Запускается обработчик onClick щелкнутого элемента. -Он
            перемещается вверх, вызывая все обработчики onClick.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое react fragment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            это компонент, который позволяет группировать несколько элементов
            внутри одного родительского элемента без создания лишних уровней
            DOM-структуры.
          </Typography>
          <Typography>
            Существует два способа использования React Fragment:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  '<React.Fragment></React.Fragment> тут можно указать props key'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={'<></> не принимает props'} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое react context?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary='Context позволяет родительскому компоненту сделать некоторую информацию доступной для любого компонента в дереве под ним - независимо от глубины - без явной передачи ее через props.' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Использование контекста:' />
            </ListItem>
            <List>
              <ListItem>
                <ListItemText primary='- Во-первых, вам нужно создать контекст с помощью функции React.createContext(defaultValue)' />
              </ListItem>
              <ListItem>
                <ListItemText primary='- Обернуть дерево компонентов в Provider, чтобы контекст был доступен всем компонентам внутри него' />
              </ListItem>
              <ListItem>
                <ListItemText primary='- Для получения контекста в функциональных компонентах используется хук useContext, а в классовых компонентах можно использовать статическое поле contextType или Consumer' />
              </ListItem>
            </List>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое порталы в react?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            createPortal позволяет вам выводить некоторые дочерние элементы в
            другую часть DOM. События от порталов распространяются в
            соответствии с деревом React, а не с деревом DOM.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое props в react?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Это данные которые родительские компоненты могут передавать
            дочерним. Их нельзя изменять и мутирывать. Prop drilling - это
            неофициальный термин для передачи данных через несколько вложенных
            дочерних компонентов в попытке доставить их глубоко вложенному
            компоненту. Решить эту проблему можно с помощью Context или
            использовать state manager(redux, mobX)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое state в react?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            state представляет текущее состояние компонента и может изменяться в
            течение времени в результате взаимодействия пользователя, получения
            данных с сервера или других событий. state можно управлять с помощью
            this.setState(state, [callback]) в классовых компонентах, и функции
            возврощаймой из хука useState(initVal) вторым элементо в
            функциональных компонентах. Эти функции являються асинхроными.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что за PureComponent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            классовый компонент у которого реализован метод
            shouldComponentUpdate(nextProps, nextState)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>
            Когда может происходить обновление компонентов?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            При обновлении state, props, context, либо если родительский
            компонент обновился
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>
            В чем отличие использование state в классовых и функциональных
            компонентах?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Классовые компоненты:</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'Состояние объявляется и инициализируется в конструкторе класса с помощью this.state.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={'Доступ к состоянию осуществляется через this.state.'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'Изменение состояния осуществляется с помощью метода this.setState(), который принимает новое состояние или функцию для его обновления.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'При вызове this.setState() React автоматически перерисовывает компонент и обновляет его состояние.'
                }
              />
            </ListItem>
          </List>
          <Typography>Функциональные компоненты:</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'Состояние объявляется с использованием useState, useReducer хука.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'Доступ к состоянию осуществляется через соответствующую переменную.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'Изменение состояния осуществляется с помощью функции, возвращаемой useState, useReducer.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'При изменении состояния с помощью помощью функции, возвращаемой useState, useReducer React обновляет только измененные части компонента, а не перерисовывает его полностью.'
                }
              />
            </ListItem>
          </List>
          <Typography>
            В целом, основное отличие заключается в способе объявления и
            обновления состояния, а также в доступе к нему.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>В каких случаях происходит ререндер?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary='Изменение состояния' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Изменение пропсов' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Изменение контекста' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Вызов метода forceUpdate()' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Изменение жизненного цикла' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Изменение ключей' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Какие есть способы оптимизирывать рендер?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary='Используйте мемоизацию с помощью React.memo()' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Разделите компоненты на меньшие части' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Используйте ключи' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Используйте useCallback() и useMemo()' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Используйте shouldComponentUpdate() в классовых компонентах' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Используйте React.PureComponent' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Используйте ленивую загрузку (Lazy Loading) и код-сплиттинг' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Избегайте ненужных вычислений в методе render()' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Методы жизненого цикла в react</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Typography variant='h2'>
              Жизненный цикл компонентов React:
            </Typography>
            <List>
              <ListItem>
                <Typography variant='subtitle1'>
                  <strong>
                    Монтирование (Mounting) - этот этап происходит при создании
                    компонента и включает методы:
                  </strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary='constructor() - вызывается при создании компонента и используется для инициализации состояния и свойств компонента.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='static getDerivedStateFromProps(props, state) - вызывается перед методом render() и используется для обновления состояния компонента на основе новых props.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='render() - вызывается для создания виртуального DOM-дерева компонента.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='componentDidMount() - вызывается после того, как компонент был добавлен в DOM и используется для выполнения дополнительных действий, таких как загрузка данных.' />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Typography variant='subtitle1'>
                  <strong>
                    Обновление (Updating) - этот этап происходит при обновлении
                    состояния или свойств компонента и включает методы:
                  </strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary='static getDerivedStateFromProps(props, state) - вызывается перед методом render() и используется для обновления состояния компонента на основе новых props.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='shouldComponentUpdate(nextProps, nextState) - вызывается перед обновлением компонента и используется для определения, нужно ли перерисовывать компонент или нет.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='render() - вызывается для создания виртуального DOM-дерева компонента.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='getSnapshotBeforeUpdate(prevProps, prevState) - вызывается перед фактическим обновлением компонента и используется для получения информации о DOM до изменений.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='componentDidUpdate(prevProps, prevState, snapshot) - вызывается после того, как компонент был обновлен и используется для выполнения дополнительных действий, таких как обновление данных.' />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Typography variant='subtitle1'>
                  <strong>
                    Размонтирование (Unmounting) - этот этап происходит при
                    удалении компонента из DOM и включает метод:
                  </strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary='componentWillUnmount() - вызывается перед удалением компонента из DOM и используется для выполнения дополнительных действий, таких как очистка ресурсов.' />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Typography variant='subtitle1'>
                  <strong>
                    Обработка ошибок - Следующие методы вызываются, если
                    произошла ошибка в процессе рендеринга, методе жизненного
                    цикла или конструкторе любого дочернего компонента:
                  </strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary='static getDerivedStateFromError(error) - используется для обновления состояния компонента на основе новых error.' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='componentDidCatch(error, info) - обработка ошибки' />
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Что такое ref в react?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ref - это объект, который позволяет получить доступ к элементу DOM
            или компоненту React!
          </Typography>
          <Typography>Пример использования:</Typography>
          <List>
            <ListItem>
              <ListItemText primary='Управление фокусом, выделение текста или воспроизведение медиа' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Скролл' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Получение текущих размеров DOM: offsetWidth, offsetHeight и т.д.' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>паттерны в react</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary='Контейнеры и компоненты-представления' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Компоненты высшего порядка (HOC)' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Компоненты рендер-пропс' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Композиция компонентов' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Контекст' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Хуки' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Оптимизация рендера' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Компоненты высшего порядка (HOC)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Применяеться для выноса повторяющейся логики из классового
            компонента в функциональных можно использовать хуки! Должен
            принимать компонент и возврощал компонент с дополнительной логикой
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Компоненты рендер-пропс</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>это функция которая возврощает JSX</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>хуки в react</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'h2'} variant={'h2'}>
            Хуки состояния
          </Typography>
          <Divider />
          <Typography component={'p'} variant={'body1'}>
            Чтобы добавить состояние в компонент, используйте один из этих
            хуков:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useState объявляет переменную состояния, которую вы можете обновлять напрямую.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useReducer объявляет переменную состояния с логикой обновления внутри функции reducer..'
                }
              />
            </ListItem>
          </List>
          <Divider />
          <Typography component={'h2'} variant={'h2'}>
            Контекстные хуки
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={'useContext читает и подписывается на контекст.'}
              />
            </ListItem>
          </List>
          <Divider />
          <Typography component={'h2'} variant={'h2'}>
            Ссылочные хуки
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useRef объявляет ссылку. Вы можете хранить в нем любое значение, но чаще всего он используется для хранения узла DOM.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useImperativeHandle позволяет вам настроить ссылку, открываемую вашим компонентом. Это редко используется.'
                }
              />
            </ListItem>
          </List>
          <Divider />
          <Typography component={'h2'} variant={'h2'}>
            Хуки эффектов
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={'useEffect подключает компонент к внешней системе.'}
              />
            </ListItem>
          </List>
          <Typography component={'p'} variant={'body1'}>
            Есть две редко используемые вариации useEffect с различиями во
            времени:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useLayoutEffect срабатывает до того, как браузер перерисовывает экран. Вы можете измерить компоновку здесь.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useInsertionEffect срабатывает до того, как React внесет изменения в DOM. Здесь библиотеки могут вставлять динамические CSS.'
                }
              />
            </ListItem>
          </List>
          <Divider />
          <Typography component={'h2'} variant={'h2'}>
            Производительность хуков
          </Typography>
          <Divider />
          <Typography component={'p'} variant={'body1'}>
            Чтобы пропустить вычисления и ненужный повторный рендеринг,
            используйте один из этих хуков:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useMemo позволяет кэшировать результат дорогостоящего вычисления.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useCallback позволяет кэшировать определение функции перед передачей ее оптимизированному компоненту.'
                }
              />
            </ListItem>
          </List>
          <Typography component={'p'} variant={'body1'}>
            Чтобы установить приоритет рендеринга, используйте один из этих
            хуков:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useTransition позволяет пометить переход состояния как неблокирующий и разрешить другим обновлениям прерывать его.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useDeferredValue позволяет отложить обновление некритичной части пользовательского интерфейса и позволить другим частям обновляться первыми.'
                }
              />
            </ListItem>
          </List>
          <Divider />
          <Typography component={'h2'} variant={'h2'}>
            Другие хуки - эти хуки в основном полезны авторам библиотек и не
            часто используются в коде приложения.
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={
                  'useDebugValue позволяет вам настроить метку, которую React DevTools отображает для вашего пользовательского хука.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useId позволяет компоненту связать с собой уникальный ID. Обычно используется в API доступности.'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  'useSyncExternalStore позволяет компоненту подписаться на внешний магазин.'
                }
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Как работает suspense?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {'<Suspense>'} позволяет отображать фалбэк до тех пор, пока его
            дочерние элементы не закончат загрузку. пропсы:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary='children: Фактический пользовательский интерфейс, который вы собираетесь рендерить.' />
            </ListItem>
            <ListItem>
              <ListItemText primary='fallback: Альтернативный пользовательский интерфейс, который будет отображаться вместо реального пользовательского интерфейса, если он не закончил загрузку.' />
            </ListItem>
          </List>
          <Typography>Ограничения:</Typography>
          <List>
            <ListItem>
              <ListItemText primary='React не сохраняет состояние для рендеров, которые были приостановлены до того, как они смогли смонтироваться в первый раз. Когда компонент загрузится, React повторит попытку рендеринга приостановленного дерева с нуля.' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Если Suspense отображал содержимое для дерева, но затем снова приостановился, то откат будет показан снова, если только обновление, вызвавшее его, не было вызвано startTransition или useDeferredValue.' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Как работает React.lazy()?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Функция React.lazy позволяет рендерить динамический импорт как
            обычный компонент. Она автоматически загрузит бандл содержащий
            OtherComponent, когда этот компонент будет отрендерен. React.lazy
            принимает функцию, которая должна вызвать динамический import().
            Результатом возвращённого Promise является модуль, который
            экспортирует по умолчанию React-компонент (export default).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Особености Concurrent Mode?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            это новая функциональность, которая была введена в React версии
            16.6.0 и выше.
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary='Приоритеты' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Приостановка и возобновление (Suspense and Resuming)' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Пакетная обработка (Batching)' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Отложенный рендеринг (Deferred Rendering)' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Предсказуемость времени отклика' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
