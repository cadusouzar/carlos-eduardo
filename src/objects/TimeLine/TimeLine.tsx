import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type TimeLineItem = {
  titulo: string;
  texto?: string;
  date: string;
};

type PropsTimeLine = {
  timeLine: TimeLineItem[];
};

export const TimeLine: React.FC<PropsTimeLine> = ({ timeLine }) => {
  return (
    <VerticalTimeline className='cursor-default' lineColor='transparent'>
      {timeLine.map((item, index) => {
        const isOdd = index % 2 === 1;
        const contentStyle = {
          background: 'transparent',          
          color: 'white',
          borderTop: '1px solid rgba(255, 255, 255, .6)',
          borderRadius: '20px',
          boxShadow: '20px 20px 50px rgba(0, 0, 0, .5)',
          ...(isOdd ? { borderRight: '1px solid rgba(255, 255, 255, .6)' } : { borderLeft: '1px solid rgba(255, 255, 255, .6)' }),
        };

        return (
          <VerticalTimelineElement
            key={index}
            className='font-montserrat'
            contentArrowStyle={{ boxShadow: '20px 20px 50px rgba(0, 0, 0, .5)', borderRight: '7px solid #4f4f4f' }}
            contentStyle={contentStyle}
            iconStyle={{ background: 'transparent', boxShadow: '20px 20px 50px rgba(0, 0, 0, .5)', border: '1px solid rgba(255, 255, 255, .6)'}}
            date={item.date}
          >
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};







