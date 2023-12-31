import { Icon } from 'objects/Icon';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type TimeLineItem = {
  titulo: string;
  texto?: string;
  date: string;
  variantIcon: string
};

type PropsTimeLine = {
  timeLine: TimeLineItem[];
};

export const TimeLine: React.FC<PropsTimeLine> = ({ timeLine }) => {
  return (
    <VerticalTimeline className='cursor-default text-very-small top-14' lineColor='#c4c4c4'>
      {timeLine.map((item, index) => {
        const isOdd = index % 2 === 1;
        const contentStyle = {
          background: '#4f4f4f',          
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
            iconStyle={{ display:'flex', alignItems: 'center', color:'white',background: '#4f4f4f', boxShadow: '20px 20px 50px rgba(0, 0, 0, .5)', border: '1px solid rgba(255, 255, 255, .6)'}}
            date={item.date}
            icon={<Icon variant={item.variantIcon} marginLeft='md:ml-icon768 lg:ml-icon1024 xl:ml-icon1080 ml-icon' width='w-6 md:w-6 lg:w-7 w-10 xl:w-10'/>}
          >
            <h3 className='text-center mb-4 text-very-small'>{item.titulo}</h3>
            <p className='text-center'>{item.texto}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};







