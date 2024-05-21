import clsx from 'clsx';
import React from 'react';
const SectionRoot = ({
  as: Component = 'div',
  className,
  children,
  id,
}: React.PropsWithChildren<{
  as?: React.ElementType;
  className?: string;
  id?: string;
}>) => {
  return (
    <div className='section container relative mx-auto pt-10 md:pt-28' id={id}>
      <Component
        className={clsx(className, '  text-white ')}
        data-aos='fade-up'
      >
        {children}
      </Component>
    </div>
  );
};

const SectionTitle = ({
  as: Component = 'h3',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component
      className={clsx(className, ' text-[28px]  font-bold md:text-[46px]')}
    >
      {children}
    </Component>
  );
};

const SectionContent = ({
  as: Component = 'p',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component className={clsx(className, 'mt-3 overflow-hidden leading-7')}>
      {children}
    </Component>
  );
};

const SectionFooter = ({
  as: Component = 'div',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return <Component className={clsx(className, 'mt-5')}>{children}</Component>;
};

const SectionSubTitle = ({
  as: Component = 'p',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component
      className={clsx(className, 'mt-3 space-x-0.5 text-[19px] text-[#C5C5C5]')}
    >
      {children}
    </Component>
  );
};
export const Section = Object.assign(SectionRoot, {
  Title: SectionTitle,
  SubTitle: SectionSubTitle,
  Content: SectionContent,
  Footer: SectionFooter,
});
