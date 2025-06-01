import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

function Achievements() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto py-16 px-8">
        <div className="">
          <h2 className="font-light text-xl mb-2 text-gray-700">Notable</h2>
          <h1 className="text-4xl  font-light">Achievements</h1>
          <Divider className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>
      </div>
      <div className="px-8 sm:px-10 md:px-14 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="group/container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group/card scale-105 shadow-2xl group-hover/container:scale-100 group-hover/container:shadow-lg hover:!scale-105 hover:!shadow-2xl transition-all duration-300 border-none bg-gradient-to-br from-white to-default-50 dark:from-default-100 dark:to-default-200">
              <CardHeader className="pb-2 pt-6 px-6 flex-col items-start space-y-2">
                <p className="text-tiny font-semibold text-primary tracking-wider">PLN Pusat Penelitian dan Pengembangan (Puslitbang)</p>
                <h3 className="font-bold text-xl text-primary group-hover/container:text-foreground group-hover/card:!text-primary transition-colors">1st Place Winner PLN ICE 2023</h3>
              </CardHeader>
              <CardBody className="overflow-visible py-4 px-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img alt="1st PLN ICE 2023" className="w-full h-48 object-cover scale-110 group-hover/container:scale-100 group-hover/card:!scale-110 transition-transform duration-300" src="./img/plnice2023.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">2023</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm opacity-90">Design and build Electric Motorcycle from Scratch </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="group/card hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-none bg-gradient-to-br from-white to-default-50 dark:from-default-100 dark:to-default-200">
              <CardHeader className="pb-2 pt-6 px-6 flex-col items-start space-y-2">
                <p className="text-tiny  font-semibold text-secondary tracking-wider">PLN Pusat Penelitian dan Pengembangan (Puslitbang)</p>
                <h3 className="font-bold text-xl text-foreground group-hover/card:text-secondary transition-colors">4th Place Winner PLN ICE 2022</h3>
              </CardHeader>
              <CardBody className="overflow-visible py-4 px-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img alt="Achievement background" className="w-full h-48 object-cover transition-transform duration-300 group-hover/card:scale-110" src="./img/plnice2022.JPG" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">2022</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm opacity-90">Conversion of 150cc ICE Motorcycle into Electric Motorbike</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="group/card hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-none bg-gradient-to-br from-white to-default-50 dark:from-default-100 dark:to-default-200">
              <CardHeader className="pb-2 pt-6 px-6 flex-col items-start space-y-2">
                <p className="text-tiny  font-semibold text-success tracking-wider">BEM REMA Universitas Pendidikan Ganesha (Undiksha) </p>
                <h3 className="font-bold text-xl text-foreground group-hover/card:text-success transition-colors">2nd Place Essay Competition</h3>
              </CardHeader>
              <CardBody className="overflow-visible py-4 px-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img alt="Achievement background" className="w-full h-48 object-cover transition-transform duration-300 group-hover/card:scale-110" src="./img/gema.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-success/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">2021</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm opacity-90"> Awarded Best Paper & 2nd Place Presentation Cultural Essay</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
