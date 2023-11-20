interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`${className} min-w-screen min-h-screen max-w-screen-xl mx-auto px-4 xl:px-0 py-5 flex items-center justify-center`}>
            {children}
        </div>
    );
};

export default Container;
