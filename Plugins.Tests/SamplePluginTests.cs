using Microsoft.VisualStudio.TestTools.UnitTesting;
using FixRM.Plugins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FakeXrmEasy;

namespace FixRM.Plugins.Tests
{
    [TestClass()]
    public class SamplePluginTests
    {
        [TestMethod()]
        public void ExecuteTest()
        {
            var context = new XrmFakedContext();

            Assert.ThrowsException<NotImplementedException>(() =>
            {
                context.ExecutePluginWith<SamplePlugin>();
            });
        }
    }
}